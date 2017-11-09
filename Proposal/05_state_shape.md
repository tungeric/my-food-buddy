### MyFoodBudy Sample State
```javascript
{
  entities: {
    foods: {
      1: {
        id: 1,
        name: "chicken",
        amount_grams: 4,
        calories: 350,
        protein_grams: 20,
        carbs_grams: 1
        fat_grams: 5
      }
    }
    meals: {
      11: {
        id: 11,
        title: "asdfasdfasd"
        song_url: "alsdkjfaldfjdsfasdk",
        uploader_id: 1
      }
    }
    comments: {
      31: {
        id: 31,
        body: "aksdfasdfasdfkadshfkajdsfhakjsfh"
        author_id: 1,
        track_id: 11
      }
    }
    ui: {

    }
    errors: {

    }
    session: {
      id: 51,
      user_id: 1,
      track_id: 11
    }
    play: {
      track_id: 11
      // not sure what other info is needed for this
    }
  }
}
```
