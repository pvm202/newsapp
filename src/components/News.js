import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles= [ {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Jon Winkler, Elsie Boskamp, and Daniel Donabedian",
        "title": "When is Amazon Prime Day 2024? The best Amazon deals are coming July 16 and 17",
        "description": "Amazon Prime Day 2024 is officially set for July 16 and 17. Find out how to save big during the summer sale and shop the best early deals today.",
        "url": "https://reviewed.usatoday.com/amazon-prime-day/features/amazon-prime-day-sale",
        "urlToImage": "https://media.zenfs.com/en/reviewed_ecomm_articles_907/a55926cee1c0c3f931f5428c072853a5",
        "publishedAt": "2024-06-25T10:35:21Z",
        "content": "Purchases you make through our links may earn us and our publishing partners a commission.\r\nWe finally know when Amazon Prime Day 2024 is happening. The retail giant just unveiled all the deets on Pr… [+5132 chars]"
      },{
        "source": {
          "id": "time",
          "name": "Time"
        },
        "author": "Eric Cortellessa",
        "title": "Steve Bannon Prepares for Prison",
        "description": "The longtime Trump adviser begins a four-month prison sentence on July 1. He intends to use it to rally Trump's base ahead of the election.",
        "url": "https://time.com/6991472/steve-bannon-prison-trump/",
        "urlToImage": "https://api.time.com/wp-content/uploads/2024/06/steve-bannon-2024-06.jpg?quality=85&w=1200&h=628&crop=1",
        "publishedAt": "2024-06-25T17:15:13Z",
        "content": "Steve Bannon is taking his show on the road. Convicted by a federal jury in 2022 for contempt of Congress, the right-wing agitator is set to spend four months in a Connecticut penitentiary starting J… [+13985 chars]"
      }, {
        "source": {
          "id": "polygon",
          "name": "Polygon"
        },
        "author": "Zoë Hannah",
        "title": "Cozy Grove: Camp Spirit is a better, faster version of the lo-fi life sim",
        "description": "Review: Cozy Grove: Camp Spirit, the sequel to Cozy Grove, was released on Tuesday on mobile — and it’s exclusive to Netflix users.",
        "url": "https://www.polygon.com/reviews/24185707/cozy-grove-camp-spirit-review",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/0B-Nis1Fpsd1IBlk37otF2jQ_3E=/461x75:2080x923/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25505584/Screenshot_2024_06_25_at_12.21.22_PM.jpeg",
        "publishedAt": "2024-06-25T17:09:15Z",
        "content": "When Spry Fox co-founder and studio director David Edery and his team set out to make a second Cozy Grove game, they wanted to mirror the first game, but bigger and better. The concept of the origina… [+6793 chars]"
      }]

    constructor(){
        super();
        console.log("hi am i a constructor from news  components");
        this.state={
            articles:this.articles,
            loading:false

        }
    }

  render() {


    return (

      <div className='container my-3'>
        <h2>newsbuddy topheadlines</h2>

      <div className="row">

      <div className="col-md-4">
      <NewsItem title="mytitle" description="mydesc" imageUrl="https://cdn.arstechnica.net/wp-content/uploads/2019/08/GettyImages-1051924748-760x380.jpg"
      newsUrl="todo"/>
        
      </div>

      <div className="col-md-4">
      <NewsItem title="mytitle" description="mydesc"/>
        
      </div>

      <div className="col-md-4">
      <NewsItem title="mytitle" description="mydesc"/>
        
      </div>
      
      

      </div>

      </div>
    )
  }
}

export default News
