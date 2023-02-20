-- CreateTable
CREATE TABLE "users_med" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_med_id_key" ON "users_med"("id");
