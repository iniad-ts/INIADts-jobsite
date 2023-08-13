-- CreateTable
CREATE TABLE "Member" (
    "githubId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "realName" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "graduateYear" INTEGER,
    "introduction" TEXT,
    "links" JSONB,
    "products" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("githubId")
);
