export default function Timeline() {
  return (
    <div className="Timeline">
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      <a class="twitter-timeline" 
        data-theme="dark" 
        href="https://twitter.com/deepsixca?ref_src=twsrc%5Etfw"
        data-width="300"
        data-height="500"
        data-chrome="nofooter noborders noscrollbar"
      >Tweets by deepsixca</a>
    </div>
  )
}