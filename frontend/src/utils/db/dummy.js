export const POSTS = [
  {
    _id: "1",
    text: "Will AI take our Jobs?",
    img: "/posts/post1.jpg",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy1.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "I dont think so!",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl1.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "2",
    text: "Did you guys heard about Devin?",
    img: "/posts/post2.jpg",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.png",
      fullName: "John Doe",
    },
    comments: [],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
  },
  {
    _id: "3",
    text: "Tell me what should i learn?",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy2.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "AI / ML",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl2.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "4",
    text: "React 19 is comming!!!. It is comming with whole new featurs to make it even more faster.",
    img: "/posts/post3.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Excited 🎉✨",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl3.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
      "6658s897",
      "6658s898",
      "6658s899",
    ],
  },
];

export const USERS_FOR_RIGHT_PANEL = [
  {
    _id: "1",
    fullName: "John Doe",
    username: "johndoe",
    profileImg: "/avatars/boy2.png",
  },
  {
    _id: "2",
    fullName: "Jane Doe",
    username: "janedoe",
    profileImg: "/avatars/girl1.png",
  },
  {
    _id: "3",
    fullName: "Bob Doe",
    username: "bobdoe",
    profileImg: "/avatars/boy3.png",
  },
  {
    _id: "4",
    fullName: "Daisy Doe",
    username: "daisydoe",
    profileImg: "/avatars/girl2.png",
  },
];