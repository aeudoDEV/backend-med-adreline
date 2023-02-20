/*
  Warnings:

  - You are about to alter the column `created_at` on the `users_med` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users_med" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users_med" ("created_at", "email", "id", "password") SELECT "created_at", "email", "id", "password" FROM "users_med";
DROP TABLE "users_med";
ALTER TABLE "new_users_med" RENAME TO "users_med";
CREATE UNIQUE INDEX "users_med_id_key" ON "users_med"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
