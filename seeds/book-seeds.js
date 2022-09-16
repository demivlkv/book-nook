const { Post } = require('../models');
//template
const postData = [

//3rd grade - Sam
{
    title: 'Doctor De Soto',
    author: 'William Steig', 
    lexile_level: 560,
    genre: 'Fiction',
    description:"'Doctor De Soto, the dentist, did very good work.' With the aid of his able assistant, Mrs. De Soto, he copes with the toothaches of animals large and small. His expertise is so great that his fortunate patients never feel any pain. Since he's a mouse, Doctor De Soto refuses to treat 'dangerous' animals--that is, animals who have a taste for mice. But one day a fox shows up and begs for relief from the tooth that's killing him. How can the kindhearted De Sotos turn him away? But how can they make sure that the fox doesn't give in to his baser instincts once his tooth is fixed? Those clever De Sotos will find a way."
}, 
{
    title: 'Weslandia', 
    author: 'Paul Fleischman', 
    lexile_level: 820, 
    genre: 'Fiction', 
    description: "Enter the witty, intriguing world of Weslandia! Now that school is over, Wesley needs a summer project. He's learned that each civilization needs a staple food crop, so he decides to sow a garden and start his own — civilization, that is. He turns over a plot of earth, and plants begin to grow. They soon tower above him and bear a curious-looking fruit. As Wesley experiments, he finds that the plant will provide food, clothing, shelter, and even recreation. It isn't long before his neighbors and classmates develop more than an idle curiosity about Wesley — and exactly how he is spending his summer vacation."

}, 
{
    title: 'A Bad Case of Stripes', 
    author: 'David Shannon', 
    lexile_level: 610, 
    genre: 'Fiction', 
    description:"'What we have here is a bad case of stripes. One of the worst I've ever seen!' Camilla Cream loves lima beans, but she never eats them. Why? Because the other kids in her school don't like them. And Camilla Cream is very, very worried about what other people think of her. In fact, she's so worried that she's about to break out in...a bad case of stripes! 'Shannon's story is a good poke in the eye of conformity...and his empathetic, vivid artwork keeps perfect pace with the tale.'"
}, 
{
    title: 'Runaway Ralph', 
    author: 'Beverly Cleary', 
    lexile_level: 890, 
    genre: 'Fiction', 
    description:"With a motorcycle to rev and the open road to see, Ralph S. Mouse is itching to run away from his overprotective family! But once he escapes to a summer campground nearby, the horrors of the wild make him doubt his plan. Angry cats, scary watchdogs, and grouchy gophers are only the half of it..."
}, 
{
    title: 'Thunder Rose', 
    author: 'Jerdine Nolen', 
    lexile_level: 910, 
    genre: 'Fiction', 
    description:"Thunder Rose vows to grow up to be more than just big and strong, thank you very kindly--and boy, does she ever! But when a whirling storm on a riotous rampage threatens, has Rose finally met her match?"
}, 

//4th grade - Demi
{
    title: 'Because of Winn-Dixie',
    author: 'Kate DiCamillo', 
    lexile_level: 610,
    genre: "Children's literature",
    description: "One summer’s day, ten-year-old India Opal Buloni goes down to the local supermarket for some groceries – and comes home with a dog. But Winn-Dixie is no ordinary dog. It’s because of Winn-Dixie that Opal begins to make friends. And it’s because of Winn-Dixie that she finally dares to ask her father about her mother, who left when Opal was three. In fact, as Opal admits, just about everything that happens that summer is because of Winn-Dixie."
},
{
    title: 'Where the Sidewalk Ends',
    author: 'Shel Silverstein', 
    lexile_level: 771,
    genre: "Children's literature, Poetry",
    description: "You'll meet a boy who turns into a TV set, and a girl who eats a whale. The Unicorn and the Bloath live there, and so does Sarah Cynthia Sylvia Stout who will not take the garbage out. It is a place where you wash your shadow and plant diamond gardens, a place where shoes fly, sisters are auctioned off, and crocodiles go to the dentist. Shel Silverstein's masterful collection of poems and drawings stretches the bounds of imagination and will be cherished by readers of all ages. This is a collection that belongs on everyone's bookshelf. Makes a great gift for special occasions such as holidays, birthdays, and graduation."
},
{
    title: 'Little House on the Prarie',
    author: 'Laura Ingalls Wilder', 
    lexile_level: 760,
    genre: "Children's literature, Western",
    description: "Laura Ingalls and her family are heading to Kansas! Leaving behind their home in the Big Woods of Wisconsin, they travel by covered wagon until they find the perfect spot to build a little house on the prairie. Laura and her sister Mary love exploring the rolling hills around their new home, but the family must soon get to work, farming and hunting and gathering food for themselves and for their livestock. Just when the Ingalls family starts to settle into their new home, they find themselves caught in the middle of a conflict. Will they have to move again?"
},
{
    title: 'Matilda',
    author: 'Roald Dahl', 
    lexile_level: 840,
    genre: "Children's literature, Humor, Fantasy",
    description: "Matilda is a sweet, exceptional young girl, but her parents think she's just a nuisance. She expects school to be different but there she has to face Miss Trunchbull, a kid-hating terror of a headmistress. When Matilda is attacked by the Trunchbull she suddenly discovers she has a remarkable power with which to fight back. It'll take a superhuman genius to give Miss Trunchbull what she deserves and Matilda may be just the one to do it!"
},
{
    title: 'Charlie and the Chocolate Factory',
    author: 'Roald Dahl', 
    lexile_level: 810,
    genre: "Children's literature, Fantasy",
    description: "Willy Wonka's famous chocolate factory is opening at last! But only five lucky children will be allowed inside. And the winners are: Augustus Gloop, an enormously fat boy whose hobby is eating; Veruca Salt, a spoiled-rotten brat whose parents are wrapped around her little finger; Violet Beauregarde, a dim-witted gum-chewer with the fastest jaws around; Mike Teavee, a toy pistol-toting gangster-in-training who is obsessed with television; and Charlie Bucket, Our Hero, a boy who is honest and kind, brave and true, and good and ready for the wildest time of his life!"
},

//5th grade - Mary


//6th grade - Boris

]