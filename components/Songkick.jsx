export default function Songkick() {
  return (
    <div className="Songkick">
      <a 
          href="https://www.songkick.com/artists/10109726" 
          class="songkick-widget" 
          data-theme="light" 
          data-track-button="on" 
          data-detect-style="true" 
          data-background-color="transparent" 
          data-locale="en"
      >
          deepsix tour dates
      </a>
      <script 
          src="//widget.songkick.com/10109726/widget.js"
      />
    </div>
  )
}