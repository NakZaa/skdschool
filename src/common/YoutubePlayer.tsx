export function Video(props: { src: string }) {
  return (
    <div className="w-full max-w-2xl shadow-lg">
      <iframe
        className="aspect-video w-full rounded-lg"
        src={props.src}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
