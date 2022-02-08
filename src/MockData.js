import { OFFERING, POST_TYPE, SEEKING } from "./Consts";

const projectPostDummy = {
  title: "Project Topic",
  [POST_TYPE]: OFFERING,
  userType: 'Faculty',
  date: new Date().toUTCString(),
  details: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus deserunt dignissimos doloremque doloribus dolorum ducimus earum error et explicabo facere fugit illum ipsam ipsum laboriosam laudantium molestiae, nam natus non nostrum numquam odit omnis provident quae quasi qui quisquam quos recusandae reiciendis reprehenderit repudiandae soluta tempora vero. Corporis enim ipsum modi numquam officiis. A accusamus ad aspernatur assumenda atque aut autem beatae consectetur consequatur cumque cupiditate dolorem dolorum ducimus earum est exercitationem id illum iste, itaque laboriosam laudantium maiores nobis numquam odit officia qui quidem repellat repudiandae sed sequi tempore, tenetur ullam ut vel veritatis vero voluptas. Quod, unde.",
  skills: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut culpa delectus deserunt dolore explicabo fuga fugit laborum laudantium, maxime minus, mollitia neque pariatur quia quos reprehenderit, sit tenetur veniam.',
  software: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut culpa delectus deserunt dolore explicabo fuga fugit laborum laudantium, maxime minus, mollitia neque pariatur quia quos reprehenderit, sit tenetur veniam.',
  advisor: 'Name (Unset if none yet/student)',
  members: [
    'Name - Preferred Contact if applicable',
    'Name - Preferred Contact if applicable',
    'Name - Preferred Contact if applicable',
    'Name - Preferred Contact if applicable',
    'Name - Preferred Contact if applicable',
    'Name - Preferred Contact if applicable',
  ]
};

const lookingPostDummy = {
  [POST_TYPE]: SEEKING,
  title: 'Looking for Group',
  name: 'John Doe',
  contact: 'helloworld@domain.tld',
  details: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque delectus deserunt dignissimos doloremque doloribus dolorum ducimus earum error et explicabo facere fugit illum ipsam ipsum laboriosam laudantium molestiae, nam natus non nostrum numquam odit omnis provident quae quasi qui quisquam quos recusandae reiciendis reprehenderit repudiandae soluta tempora vero. Corporis enim ipsum modi numquam officiis. A accusamus ad aspernatur assumenda atque aut autem beatae consectetur consequatur cumque cupiditate dolorem dolorum ducimus earum est exercitationem id illum iste, itaque laboriosam laudantium maiores nobis numquam odit officia qui quidem repellat repudiandae sed sequi tempore, tenetur ullam ut vel veritatis vero voluptas. Quod, unde."
}

export const posts = [
  projectPostDummy,
  projectPostDummy,
  projectPostDummy,
  lookingPostDummy
]
