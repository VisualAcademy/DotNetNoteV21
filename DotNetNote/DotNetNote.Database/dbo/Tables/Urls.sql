-- 도메인 관리자
CREATE TABLE [dbo].[Urls]
(
	[Id] INT NOT NULL PRIMARY KEY Identity(1, 1),
	SiteUrl NVarChar(Max) Null,
	Content NVarChar(Max) Null, 
	UserName NVarChar(Max) Null,
	Created DateTime Default(GetDate())
)
Go
