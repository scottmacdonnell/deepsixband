import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Timeline() {
  return (
    <div className="Timeline"> 
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="deepsixca"
        theme={'dark'}
        noBorders
        noFooter 
        noScrollbar
        options={{
          height: 500,
          width: 300,
        }}
      />
    </div>
  )
}