import test from "node:test";
import assert from "node:assert";
import {formatDate} from "../index.js";

test("should return formatted date", () => {
  assert.strictEqual(
    formatDate("27-05-2026"),
    "27/05/2026"
  );

});

test("should return null for invalid format", () => {
  assert.strictEqual(
    formatDate("2026-05-27"),
    null
  );

});

test("should return null for invalid separator", () => {
  assert.strictEqual(
    formatDate("27/05/2026"),
    null
  );

});

test("should return null for invalid date", () => {
  assert.strictEqual(
    formatDate("99-99-2026"),
    null
  );

});

test("should return null for incomplete date", () => {
  assert.strictEqual(
    formatDate("27-05"),
    null
  );

});