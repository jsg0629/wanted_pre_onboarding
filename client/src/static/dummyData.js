const dummyTweets = [
  {
    id: 1,
    username: "Guest1",
    picture: `https://lh3.googleusercontent.com/TRW7ndxEMShppPV0YmeE-QKaqvr89MjkKm7bLGWdZsrWyTShqMXSJFv_6mOESHPtR2Buh1oHLHyJAJ7AF_dr17cMZfKLf_YstKDs=s0`,
    content:
      "Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다.",
    createdAt: "2022-02-24T16:17:47.000Z",
    updatedAt: "2022-02-24T16:17:47.000Z",
  },
  {
    id: 2,
    username: "Guest1",
    picture: `https://lh3.googleusercontent.com/TRW7ndxEMShppPV0YmeE-QKaqvr89MjkKm7bLGWdZsrWyTShqMXSJFv_6mOESHPtR2Buh1oHLHyJAJ7AF_dr17cMZfKLf_YstKDs=s0`,
    content:
      "Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다. Guest1 테스트 트윗입니다.",
    createdAt: "2022-02-24T16:17:47.000Z",
    updatedAt: "2022-02-24T16:17:47.000Z",
  },
  {
    id: 3,
    username: "Guest2",
    picture: `https://lh3.googleusercontent.com/DgA0ATlwmnydq3VHoA6IinMMhPBpGDayLN8QwMefH5yf9NyvFydjYnk5elHctQTCxLqP9cl8WToSJJjrIHJChZs=w600`,
    content:
      "Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다. Guest2 테스트 트윗입니다.",
    createdAt: "2022-02-27T11:17:47.000Z",
    updatedAt: "2022-02-27T11:17:47.000Z",
  },
  {
    id: 4,
    username: "Guest3",
    picture: `https://lh3.googleusercontent.com/d41UdXoVv1HXL3R87GBHxmBbFeoqf4bRdije-aoHkk9dcfbXCeaWoLMdkm6Q5k1VdfXeu56nR1vPVNmUE7S8CZk=w600`,
    content:
      "Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다.",
    createdAt: "2022-03-02T13:17:47.000Z",
    updatedAt: "2022-03-02T13:17:47.000Z",
  },
  {
    id: 5,
    username: "Guest3",
    picture: `https://lh3.googleusercontent.com/d41UdXoVv1HXL3R87GBHxmBbFeoqf4bRdije-aoHkk9dcfbXCeaWoLMdkm6Q5k1VdfXeu56nR1vPVNmUE7S8CZk=w600`,
    content:
      "Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다. Guest3 테스트 트윗입니다.",
    createdAt: "2022-02-29T13:17:47.000Z",
    updatedAt: "2022-02-29T13:17:47.000Z",
  },
  {
    id: 6,
    username: "Guest4",
    picture: `https://lh3.googleusercontent.com/v5u4R-fdhMED3pTeUlh4a1W3UYlXRE-J8ZhoJfT5Q6a2F-W4GBSuC8MftETpUiVD2Ffdf0U8GXT1_t9A7kFPZg6reajppuez0dmHBDY=w600`,
    content:
      "Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다. Guest4 테스트 트윗입니다.",
    createdAt: "2022-03-02T13:17:47.000Z",
    updatedAt: "2022-03-02T13:17:47.000Z",
  },
  {
    id: 7,
    username: "Guest5",
    picture: `https://lh3.googleusercontent.com/jKN2kl6a5xKIczapQEkJFqem7LRUfySpGbxuwMqI0bnk2s-wmaLGc4svmrBNxBkNmarv8kYgKJGPmxunV8FGvQ5s1w=w600`,
    content:
      "Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다. Guest5 테스트 트윗입니다.",
    createdAt: "2022-04-01T16:17:47.000Z",
    updatedAt: "2022-04-01T16:17:47.000Z",
  },
  {
    id: 8,
    username: "Guest6",
    picture: `https://lh3.googleusercontent.com/0vHoD5QnFFyerrV50BEbDEoWexdSS70zNm0TNiAgRYqUTvdyhicE_gHvuUDbofrByHFWiry6kNksQ0lmH1mKOe4vg4uvPRyBAP60SQ=w600`,
    content:
      "Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다. Guest6 테스트 트윗입니다.",
    createdAt: "2022-03-24T16:17:47.000Z",
    updatedAt: "2022-03-24T16:17:47.000Z",
  },
];

export default dummyTweets;
