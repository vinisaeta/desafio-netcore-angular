CREATE TABLE [dbo].[Produto](
	[Id] [uniqueidentifier] NOT NULL,
	[Nome] [nvarchar](300) NOT NULL,
	[ValorDeVenda] [decimal](10, 2) NOT NULL,
	[Imagem] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Produto] ADD  CONSTRAINT [PK_Produto] PRIMARY KEY CLUSTERED (
	[Id] ASC
)
GO
