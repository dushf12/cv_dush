import { type Metadata } from 'next'

export function Head({ metadata }: { metadata: Metadata }) {
	return (
		<head>
			<title>{metadata.title?.toString()}</title>
			<meta name='description' content={metadata.description?.toString()} />

			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='author' content='Dushyanth Bandaru' />
			<meta name='robots' content='index, follow' />

			<meta property='og:title' content={metadata.title?.toString()} />
			<meta property='og:description' content={metadata.description?.toString()} />
			<meta property='og:url' content='https://dushf12.github.io' />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />
			<meta property='og:image:alt' content='Dushyanth Bandaru' />
			<meta property='og:image:type' content='image/png' />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:creator' content='@dushf12' />
			<meta name='twitter:title' content={metadata.title?.toString()} />
			<meta name='twitter:description' content={metadata.description?.toString()} />
			<meta property='twitter:image:width' content='1200' />
			<meta property='twitter:image:height' content='630' />
			<meta property='twitter:image:alt' content='Dushyanth Bandaru' />
			<meta property='twitter:image:type' content='image/png' />

			<meta name='msapplication-TileColor' content='#000000' />
			<meta name='theme-color' content='#000000'></meta>


		</head>
	)
}
