export const onRequest = ctx =>
  (url => (
    (url.hostname = url.hostname.startsWith('www.')
      ? url.hostname.slice(4)
      : 'www.' + url.hostname),
    Response.redirect(`${url}`, 301)
  ))(new URL(ctx.request.url))
