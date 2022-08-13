-- CreateTable
CREATE TABLE "game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rawG_Id" INTEGER NOT NULL,
    "background_image" TEXT NOT NULL,
    "released" INTEGER NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_platform" (
    "id" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "game_platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "short_screenshots" (
    "id" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "short_screenshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_gameTogame_platform" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_gameTogame_platform_AB_unique" ON "_gameTogame_platform"("A", "B");

-- CreateIndex
CREATE INDEX "_gameTogame_platform_B_index" ON "_gameTogame_platform"("B");

-- AddForeignKey
ALTER TABLE "short_screenshots" ADD CONSTRAINT "short_screenshots_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_gameTogame_platform" ADD CONSTRAINT "_gameTogame_platform_A_fkey" FOREIGN KEY ("A") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_gameTogame_platform" ADD CONSTRAINT "_gameTogame_platform_B_fkey" FOREIGN KEY ("B") REFERENCES "game_platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;
