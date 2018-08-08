"use strict";

const {expect} = require("chai");


describe("Utility functions", () => {
	const utils = require("../index.js");
	
	describe("Objects", () => {
		describe("isString()", () => {
			const {isString} = utils;
			it("identifies literals",   () => void expect(isString("foo")).to.be.true);
			it("identifies objects",    () => void expect(isString(new String("foo"))).to.be.true);
			it("identifies subclasses", () => {
				class IndentedString extends String {
					constructor(source){
						super((source + "").replace(/^/g, "\t"));
					}
				}
				const str = new IndentedString("A");
				expect(str).to.match(/^\tA$/);
				expect(isString(str)).to.be.true;
			});
		});
		
		describe("isRegExp()", () => {
			const {isRegExp} = utils;
			it("identifies literals",   () => void expect(isRegExp(/A/)).to.be.true);
			it("identifies objects",    () => void expect(isRegExp(new RegExp("A"))).to.be.true);
			it("identifies subclasses", () => {
				class ExtendedRegExp extends RegExp {
					constructor(source, flags){
						source = source
							.replace(/\[[^\]]+\]/g, s => s
								.replace(/ /, "\\x20")
								.replace(/\t/, "\\t"))
							.replace(/\s+/g, "");
						super(source, flags);
						
						Object.defineProperty(this, "source", {
							get: () => source
						});
					}
				}
				const regexp = new ExtendedRegExp("^ A B C $");
				expect("ABC").to.match(regexp);
				expect(isRegExp(regexp)).to.be.true;
			});
		});
		
		describe("isNumeric()", () => {
			const {isNumeric} = utils;
			it("allows numeric arguments",      () => void expect(isNumeric(0xBABEFACE)).to.be.true);
			it("recognises positive integers",  () => void expect(isNumeric("45")).to.be.true);
			it("recognises negative integers",  () => void expect(isNumeric("-5")).to.be.true);
			it("recognises positive floats",    () => void expect(isNumeric("2.5")).to.be.true);
			it("recognises negative floats",    () => void expect(isNumeric("-2.5")).to.be.true);
			it("recognises basic numbers only", () => {
				expect(isNumeric("0b10100100")).to.be.false;
				expect(isNumeric("0xBABEFACE")).to.be.false;
				expect(isNumeric("3.1536e+10")).to.be.false;
				expect(isNumeric("0xAF")).to.be.false;
			});
		});
	
		describe("tween()", function(){
			const {tween, wait} = utils;
			const duration = 600;
			this.timeout(duration * 2);
			this.slow(duration * 4);
			
			it("interpolates property values over time", async () => {
				const target = {prop: 0};
				const tweenValue = tween(target, "prop", 100, {duration});
				await wait(duration / 3)  .then(() => expect(target.prop).to.be.within(10, 50));
				await wait(duration / 1.5).then(() => expect(target.prop).to.be.within(50, 100));
				await tweenValue.then(() => expect(target.prop).to.equal(100));
			});
			
			it("begins tweening from the existing value", async () => {
				const target = {prop: 90};
				const tweenValue = tween(target, "prop", 100, {duration});
				await wait(duration / 3).then(() => expect(target.prop).to.be.within(90, 100));
				await tweenValue.then(() => expect(target.prop).to.equal(100));
			});
			
			it("invokes callback functions for each frame", async () => {
				let callCount  = 0;
				const fps      = 5;
				const target   = {prop: 0};
				const previous = {value: -1, progress: -1};
				const callback = (value, progress) => {
					expect(value).to.be.above(previous.value);
					expect(progress).to.be.above(previous.progress).and.within(0, 1);
					previous.value = value;
					previous.progress = progress;
					++callCount;
				};
				await tween(target, "prop", 10, {duration, callback, fps});
				expect(callCount).to.be.at.least(duration / 60 / fps);
				expect(previous.progress).to.equal(1);
			});
			
			it("supports custom easing curves", async () => {
				const curve = [[0,0], [1,0], [1,0], [1,1]];
				const target = {prop: 0};
				const tweenValue = tween(target, "prop", 100, {duration, curve});
				await wait(duration / 4);
				expect(target.prop).to.be.below(5);
				await wait(duration / 2);
				expect(target.prop).to.be.below(50);
				await tweenValue.then(() => expect(target.prop).to.equal(100));
			});
			
			it("supports early cancellation of playback", async () => {
				const valuesWhenStopped = {A: 0, B: 0};
				const target = {foo: 0, bar: 0};
				const tweenA = tween(target, "foo", 10, {duration});
				const tweenB = tween(target, "bar", 10, {duration});
				await wait(duration / 4).then(() => expect(target.foo).to.be.above(0));
				await wait(duration / 2).then(() => tweenA.stop());
				valuesWhenStopped.A = target.foo;
				valuesWhenStopped.B = target.bar;
				expect(valuesWhenStopped.A).to.be.above(0).and.below(10);
				expect(valuesWhenStopped.B).to.be.above(0).and.below(10);
				await wait(duration / 1.5);
				expect(target.foo).to.equal(valuesWhenStopped.A);
				expect(target.bar).to.be.above(valuesWhenStopped.B);
			});
			
			it("defines presets for common easing functions", () => {
				expect(tween.LINEAR).to.be.an("array");
				expect(tween.EASE).to.be.an("array");
				expect(tween.EASE_IN).to.be.an("array");
				expect(tween.EASE_IN_OUT).to.be.an("array");
				expect(tween.EASE_OUT).to.be.an("array");
			});
			
			it("lets durations be specified", async () => {
				const target = {foo: 0, bar: 0};
				const result = [];
				const tweenA = tween(target, "foo", 5, {duration: 500}).then(() => result.push("A"));
				const tweenB = tween(target, "bar", 5, {duration: 250}).then(() => result.push("B"));
				await Promise.all([tweenA, tweenB]);
				expect(result).to.eql(["B", "A"]);
			});
			
			it("lets frame rates be specified", async () => {
				const counts = {A: 0, B: 0};
				const target = {foo: 0, bar: 0};
				const tweenA = tween(target, "foo", 5, {duration, fps: 50, callback: () => ++counts.A});
				const tweenB = tween(target, "bar", 5, {duration, fps: 25, callback: () => ++counts.B});
				await Promise.all([tweenA, tweenB]);
				expect(counts.A).to.be.above(counts.B);
				expect(target.foo).to.equal(target.bar);
			});
			
			it("lets interpolated values be overridden by a filter", async () => {
				const target = {prop: 0};
				const filter = (value, progress) => {
					expect(progress).to.be.within(0, 1);
					return `Size: ${value}cm × ${value / 2}cm`;
				};
				await tween(target, "prop", 30, {duration, filter});
				expect(target.prop).to.equal("Size: 30cm × 15cm");
			});
		});
	});
	
	describe("Function-related", () => {
		describe("punch()", () => {
			const {punch} = utils;
			
			class Example {
				constructor(name){ this.name = name; }
				count(a, b, c){ return a + b + c; }
				getName(){ return this.name; }
			}
			
			it("replaces methods", () => {
				const obj = new Example("A");
				expect(obj.getName()).to.equal("A");
				punch(obj, "getName", () => "B");
				expect(obj.getName()).to.equal("B");
			});
			
			it("allows handlers to call the original method", () => {
				const obj = new Example("A");
				punch(obj, "count", fn => fn() + fn());
				expect(obj.count(1, 2, 3)).to.equal(12);
			});
			
			it("gives handlers access to the original arguments", () => {
				const obj = new Example("A");
				punch(obj, "count", (fn, args) => +([...args].join("")) + fn());
				expect(obj.count(1, 2, 3)).to.equal(129);
			});
			
			it("returns the original method in an array", () => {
				const obj = new Example("A");
				const oldMethod = obj.getName;
				const methods = punch(obj, "getName", () => {});
				expect(methods).to.be.an("array");
				expect(methods).to.have.lengthOf(2);
				expect(methods[0]).to.equal(oldMethod);
			});
		});
	});
	
	describe("Node-specific", () => {
		const fs = require("fs");

		describe("exec()", function(){
			const {exec, wait} = utils;
			this.slow(1000);

			it("executes external commands asynchronously", () =>
				expect(exec("true")).to.be.a("promise"));

			it("captures their standard output streams", async () =>
				expect(await exec("printf", ["<%03x>\\n", "255"]))
				.	to.have.property("stdout")
				.	that.is.a("string")
				.	and.that.equals("<0ff>\n"));

			it("captures their standard error streams", async () =>
				expect(await exec("node", ["-e", `process.stderr.write("Foo")`]))
				.	to.have.property("stderr")
				.	that.is.a("string")
				.	and.that.equals("Foo"));

			it("captures the command's exit code", async () =>
				expect(await exec("node", ["-e", "process.exit(3)"]))
				.	to.have.property("code")
				.	that.is.a("number")
				.	and.that.equals(3));

			it("resolves with an object that includes each property", async () =>
				expect(await exec("node", ["-e", `
					process.stdout.write("ABC");
					process.stderr.write("XYZ");
					process.exit(1);
				`])).to.eql({
					stdout: "ABC",
					stderr: "XYZ",
					code: 1,
				}));

			it("always includes each property with the resolved object", async () => {
				expect(await exec("echo"))  .to.eql({stdout: "\n", stderr: "", code: 0});
				expect(await exec("true"))  .to.eql({stdout: "",   stderr: "", code: 0});
				expect(await exec("false")) .to.eql({stdout: "",   stderr: "", code: 1});
			});

			it("can pipe arbitrary data to standard input", async () =>
				expect(await exec("sed", ["-e", "s/in/out/"], "input")).to.eql({
					stdout: "output",
					stderr: "",
					code: 0,
				}));

			it("can pipe empty input without hanging process", () =>
				Promise.race([
					wait(750).then(() => Promise.reject()),
					exec("sed", ["-e", "s/A/B/g"], ""),
				]));
		});

		describe("execString()", () => {
			const {execString:$} = utils;
			
			it("executes ordinary arguments", async () =>
				expect(await $("echo Foo")).to.eql("Foo\n"));

			it("joins multiple arguments together before executing", async () =>
				expect(await $("echo", "Foo", "Bar")).to.eql("Foo Bar\n"));

			it("executes tagged template literals", async () =>
				expect(await $ `echo Foo Bar`).to.eql("Foo Bar\n"));

			it("executes tagged templates with interpolation", async () => {
				expect(await $ `echo Foo ${2 + 4} Baz`).to.eql("Foo 6 Baz\n");
				expect(await $ `echo F${2}o Bar ${"Baz"}`).to.eql("F2o Bar Baz\n");
				expect(await $ `${"ec" + "ho"} Foo`).to.eql("Foo\n");
			});

			it("executes multiple commands", async () =>
				expect(await $ `echo Foo; echo Bar;`).to.eql("Foo\nBar\n"));

			it("executes piped commands", async () =>
				expect(await $ `echo Foo | sed s/Foo/Bar/ | tr B b`).to.eql("bar\n"));

			it("stores stdout and stderr on thrown error objects", async () => {
				let error = null;
				try      { await $ `echo Foo; echo >&2 Bar; false`; }
				catch(e) { error = e; }
				expect(error).to.be.an.instanceOf(Error);
				expect(error).to.have.property("stdout", "Foo\n");
				expect(error).to.have.property("stderr", "Bar\n");
			});
		});

		describe("which()", () => {
			const {which} = utils;
			let firstNode = "";

			it("returns the path of the first matching executable", async () => {
				expect(firstNode = await which("node")).to.not.be.empty;
				const stats = fs.lstatSync(firstNode);
				expect(stats.isFile()).to.be.true;
				expect(!!(0o111 & stats.mode)).to.be.true;
			});

			it("returns an empty value if nothing was matched", async () =>
				expect(await which("wegfjekrwg")).to.equal(""));

			describe("when the `all` parameter is set", () => {
				it("returns an array of every match", async () => {
					const result = await which("node", true);
					expect(result).to.be.an("array");
					expect(result[0]).to.be.a("string").and.to.equal(firstNode);
				});

				it("returns an empty array if nothing was found", async () => {
					const result = await which("wegfjekrwg", true);
					expect(result).to.be.an("array").with.lengthOf(0);
				});
			});
		});
	});

	describe("Text processing", () => {
		describe("escapeRegExp()", () => {
			const {escapeRegExp} = utils;
			it("escapes backslashes",       () => void expect(escapeRegExp("\\")).to.equal("\\\\"));
			it("escapes metacharacters",    () => void expect(escapeRegExp("$")).to.equal("\\$"));
			it("escapes character classes", () => void expect(escapeRegExp("[ABC]")).to.equal("\\[ABC\\]"));
			it("escapes capturing groups",  () => void expect(escapeRegExp("(A)")).to.equal("\\(A\\)"));
			it("escapes source accurately", () => {
				const pattern = /^ember(?:\.|(?:-[^.]+)?-(?:\d+\.)+(?:debug\.)?)js$/i;
				const source = escapeRegExp(pattern.source);
				expect(new RegExp(source).test(pattern.source)).to.be.true;
			});
		});
	});
});
