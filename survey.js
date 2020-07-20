var surveyJSON = {
 showQuestionNumbers: "off",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "rating",
     name: "indoors_outdoors",
     title: "Is the event indoors or outdoors?",
     rateValues: [
       "Indoors",
       "Outdoors"
     ],
     rateValuesScores: [
        5,
        1
     ],
     defaultValue: "Indoors"
    },
    {
     "type": "rating",
     "name": "how_many_people",
     "title": "About how many people will participate?",
     "rateValues": [
      2,
      3,
      5,
      10,
      20,
      50,
      100,
      200,
      500
     ],
     defaultValue: 2
    },
    {
     type: "rating",
     name: "how_close",
     title: "How close will people be?",
     "rateValues": [
      "less than 6 feet",
      "about 6 feet",
      "more than 6 feet"
     ],
     "rateValuesScores": [
      10,
      4,
      1
     ],
     defaultValue: "less than 6 feet"
    },
    {
     type: "rating",
     name: "how_long",
     title: "How many hours long is it?",
     rateValues: [
         "15 min",
         "30 min",
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8
     ],
     rateValuesScores: [
         0.25,
         0.5,
         1,
         2,
         3,
         4,
         5,
         6,
         7,
         8
     ],
     defaultValue: "15 min"
    },
    {
     type: "rating",
     name: "masks",
     title: "How many people will wear masks?",
     rateValues: [
        "Nobody",
        "Almost nobody",
        "A few people",
        "Most people",
        "Almost everybody",
        "Everybody"
     ],
     "rateValuesScores": [
      1,
      .95,
      .9,
      .6,
      .45,
      .3
     ],
     defaultValue: "Nobody"
    }
   ]
  }
 ]
}