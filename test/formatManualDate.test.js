import test from "node:test";
import assert from "node:assert";
import { formatManualDate } from "../utils/formatManualDate.js";

test("should return formatted date", () => {
  assert.strictEqual(
    formatManualDate("27-05-2026"),
    "27/05/2026"
  );

});

test("should return null for invalid format", () => {
  assert.strictEqual(
    formatManualDate("2026-05-27"),
    null
  );

});

test("should return null for invalid separator", () => {
  assert.strictEqual(
    formatManualDate("27/05/2026"),
    null
  );

});

test("should return null for invalid date", () => {
  assert.strictEqual(
    formatManualDate("99-99-2026"),
    null
  );

});

test("should return null for incomplete date", () => {
  assert.strictEqual(
    formatManualDate("27-05"),
    null
  );

});