import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function Twitter() {
  return (
    <div className="Twitter"> 
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