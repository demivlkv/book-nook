const { Post } = require('../models');
//template
const postData = [

//3rd grade - Sam
{
    title: 'Doctor De Soto',
    author: 'William Steig', 
    lexile_level: 560,
    genre: 'Fiction',
    post_text: "Doctor De Soto, the dentist, did very good work.' With the aid of his able assistant, Mrs. De Soto, he copes with the toothaches of animals large and small. His expertise is so great that his fortunate patients never feel any pain. Since he's a mouse, Doctor De Soto refuses to treat 'dangerous' animals--that is, animals who have a taste for mice. But one day a fox shows up and begs for relief from the tooth that's killing him. How can the kindhearted De Sotos turn him away? But how can they make sure that the fox doesn't give in to his baser instincts once his tooth is fixed? Those clever De Sotos will find a way."
}, 
{
    title: 'Weslandia', 
    author: 'Paul Fleischman', 
    lexile_level: 820, 
    genre: 'Fiction', 
    post_text: "Enter the witty, intriguing world of Weslandia! Now that school is over, Wesley needs a summer project. He's learned that each civilization needs a staple food crop, so he decides to sow a garden and start his own — civilization, that is. He turns over a plot of earth, and plants begin to grow. They soon tower above him and bear a curious-looking fruit. As Wesley experiments, he finds that the plant will provide food, clothing, shelter, and even recreation. It isn't long before his neighbors and classmates develop more than an idle curiosity about Wesley — and exactly how he is spending his summer vacation."

}, 
{
    title: 'A Bad Case of Stripes', 
    author: 'David Shannon', 
    lexile_level: 610, 
    genre: 'Fiction', 
    post_text:"'What we have here is a bad case of stripes. One of the worst I've ever seen!' Camilla Cream loves lima beans, but she never eats them. Why? Because the other kids in her school don't like them. And Camilla Cream is very, very worried about what other people think of her. In fact, she's so worried that she's about to break out in...a bad case of stripes! 'Shannon's story is a good poke in the eye of conformity...and his empathetic, vivid artwork keeps perfect pace with the tale.'"
}, 
{
    title: 'Runaway Ralph', 
    author: 'Beverly Cleary', 
    lexile_level: 890, 
    genre: 'Fiction', 
    post_text:"With a motorcycle to rev and the open road to see, Ralph S. Mouse is itching to run away from his overprotective family! But once he escapes to a summer campground nearby, the horrors of the wild make him doubt his plan. Angry cats, scary watchdogs, and grouchy gophers are only the half of it..."
}, 
{
    title: 'Thunder Rose', 
    author: 'Jerdine Nolen', 
    lexile_level: 910, 
    genre: 'Fiction', 
    post_text:"Thunder Rose vows to grow up to be more than just big and strong, thank you very kindly--and boy, does she ever! But when a whirling storm on a riotous rampage threatens, has Rose finally met her match?"
}, 

//4th grade - Demi
{
    title: 'Because of Winn-Dixie',
    author: 'Kate DiCamillo', 
    lexile_level: 610,
    genre: "Children's literature",
    post_text: "One summer’s day, ten-year-old India Opal Buloni goes down to the local supermarket for some groceries – and comes home with a dog. But Winn-Dixie is no ordinary dog. It’s because of Winn-Dixie that Opal begins to make friends. And it’s because of Winn-Dixie that she finally dares to ask her father about her mother, who left when Opal was three. In fact, as Opal admits, just about everything that happens that summer is because of Winn-Dixie."
},
{
    title: 'Where the Sidewalk Ends',
    author: 'Shel Silverstein', 
    lexile_level: 771,
    genre: "Children's literature, Poetry",
    post_text: "You'll meet a boy who turns into a TV set, and a girl who eats a whale. The Unicorn and the Bloath live there, and so does Sarah Cynthia Sylvia Stout who will not take the garbage out. It is a place where you wash your shadow and plant diamond gardens, a place where shoes fly, sisters are auctioned off, and crocodiles go to the dentist. Shel Silverstein's masterful collection of poems and drawings stretches the bounds of imagination and will be cherished by readers of all ages. This is a collection that belongs on everyone's bookshelf. Makes a great gift for special occasions such as holidays, birthdays, and graduation."
},
{
    title: 'Little House on the Prarie',
    author: 'Laura Ingalls Wilder', 
    lexile_level: 760,
    genre: "Children's literature, Western",
    post_text: "Laura Ingalls and her family are heading to Kansas! Leaving behind their home in the Big Woods of Wisconsin, they travel by covered wagon until they find the perfect spot to build a little house on the prairie. Laura and her sister Mary love exploring the rolling hills around their new home, but the family must soon get to work, farming and hunting and gathering food for themselves and for their livestock. Just when the Ingalls family starts to settle into their new home, they find themselves caught in the middle of a conflict. Will they have to move again?"
},
{
    title: 'Matilda',
    author: 'Roald Dahl', 
    lexile_level: 840,
    genre: "Children's literature, Humor, Fantasy",
    post_text: "Matilda is a sweet, exceptional young girl, but her parents think she's just a nuisance. She expects school to be different but there she has to face Miss Trunchbull, a kid-hating terror of a headmistress. When Matilda is attacked by the Trunchbull she suddenly discovers she has a remarkable power with which to fight back. It'll take a superhuman genius to give Miss Trunchbull what she deserves and Matilda may be just the one to do it!"
},
{
    title: 'Charlie and the Chocolate Factory',
    author: 'Roald Dahl', 
    lexile_level: 810,
    genre: "Children's literature, Fantasy",
    post_text: "Willy Wonka's famous chocolate factory is opening at last! But only five lucky children will be allowed inside. And the winners are: Augustus Gloop, an enormously fat boy whose hobby is eating; Veruca Salt, a spoiled-rotten brat whose parents are wrapped around her little finger; Violet Beauregarde, a dim-witted gum-chewer with the fastest jaws around; Mike Teavee, a toy pistol-toting gangster-in-training who is obsessed with television; and Charlie Bucket, Our Hero, a boy who is honest and kind, brave and true, and good and ready for the wildest time of his life!"
},

//5th grade - Mary
{
    title: 'The Mysterious Benedict Society',
    author: 'Trenton Lee Stewart', 
    lexile_level: 900,
    genre: "Children's literature, Fantasy",
    post_text: "Dozens of children respond to this peculiar newspaper ad and are then put through a series of mind-bending tests, which readers take along with them. Only four children—two boys and two girls—succeed. Their challenge: to go on a secret mission that only the most intelligent and inventive children could complete. They will have to go undercover at the Learning Institute for the Very Enlightened, where the only rule is that there are no rules. But what they'll find in the hidden underground tunnels of the school is more than your average school supplies."
},
{
    title: 'Pippi Longstocking',
    author: 'Astrid Lindgren', 
    lexile_level: 870,
    genre: "Children's literature, Fantasy",
    post_text: "Tommy and his sister Annika have a new neighbor, and her name is Pippi Longstocking. She has crazy red pigtails, no parents to tell her what to do, a horse that lives on her porch, and a pet monkey named Mr. Nilsson. Whether Pippi’s scrubbing her floors, doing arithmetic, or stirring things up at a fancy tea party, her flair for the outrageous always seems to lead to another adventure."
},
{
    title: 'Adventures of Tom Sawyer',
    author: 'Mark Twain', 
    lexile_level: 950,
    genre: "Historical Fiction",
    post_text: "In this classic boys’ adventure story, Tom Sawyer has a series of adventures from tracking down a murderer to running away and attending his own funeral."
},
{
    title: 'Agony of Alice',
    author: 'Phyllis Reynolds', 
    lexile_level: 910,
    genre: "Realistic Fiction",
    post_text: "Eleven-year-old, motherless Alice decides she needs a gorgeous role model who does everything right; and when placed in homely Mrs. Plotkin's class she is greatly disappointed until she discovers it's what people are inside that counts."
},
{
    title: 'Birchbark',
    author: 'Louise Erdich', 
    lexile_level: 970,
    genre: "Historical Fiction",
    post_text: "Omakayas, a seven-year-old Native American girl of the Ojibwa tribe, lives through the joys of summer and the perils of winter on an island in Lake Superior in 1847."
},

//6th grade - Boris
{
    title: 'Elijah of Buxton',
    author: 'Christopher Paul Curtis',
    lexile_level: 980,
    genre: "Historical Fiction , Comedie and Humor",
    post_text: "A tale of eleven-year-old Elijah Freeman. The first child born into freedom in Buxton, Canada, a settlement of runaway slaves just over the border from Detroit, Elijah is best known in his hometown as the boy who threw up on Frederick Douglass. (Not on purpose, of course - he was just a baby then!) But things change when a former slave calling himself the Right Reverend Zephariah W. Connerly the Third steals money from Elijah's friend Mr. Leroy, who has been saving to buy his family out of captivity in the south. Elijah joins Mr. Leroy on a dangerous journey to America in pursuit of the disreputable preacher, and he discovers firsthand the unimaginable horrors of the life his parents fled - a life from which he'll always be free, if he can find the courage to go back home."
},
{
    title: 'The Egypt Game',
    author: 'Zilpha K Snyder',
    lexile_level: 1010,
    genre: "Classics, Mystery  and Suspense",
    post_text: "The first time Melanie Ross meets April Hall, she's not sure they'll have anything in common. But she soon discovers that they both love anything to do with ancient Egypt. When they stumble upon a deserted storage yard behind the A-Z Antiques and Curio Shop, Melanie and April decide it's the perfect spot for the Egypt Game. Before long there are six Egyptians instead of two. After school and on weekends they all meet to wear costumes, hold ceremonies, and work on their secret code. Everyone thinks it's just a game, until strange things begin happening to the players. Has the Egypt Game gone too far?",
},
{
    title: 'The Petit Prince',
    author: 'Antoine de Saint Exupery',
    lexile_level: 710,
    genre: "Fairy Tales, Folk Tales, Fables, Fantasy",
    post_text: "This enduring classic tells the story of a nameless little prince from the asteroid known as B-612 who is encountered by an airplane pilot in the Desert of Sahara. The stranded pilot has crashed thousands of miles from human habitation. He must repair his plane before his small supply of water runs out. Amazingly, it is here in the middle of nowhere that the pilot is met by this little boy, dressed in high boots and a long, regal cape and claiming to be a little prince from another world."
},
{
    title: 'The Crossover',
    author: 'Kwame Alexander',
    lexile_level: 750,
    genre: "Realistic Fiction, Young Adult, Poetry, Songs, Verse",
    post_text: "Josh and his twin brother Jordan are awesome on the court. But Josh has more than basketball in his blood. He's got mad beats too, beats that tell his family's story in verse. But both brothers must come to grips with growing up, on and off the court, as they realize breaking the rules can come at a terrible price, resulting in a game-changer for their entire family. Winner of the 2015 Newbery Medal"
},
{
    title: 'Counting by 7s',
    author: 'Holly Golberg Sloan',
    lexile_level: 770,
    genre: "Realistic Fiction",
    post_text: "Willow Chance is a 12-year-old genius, obsessed with nature and diagnosing medical conditions, who finds it comforting to count by 7s. It has never been easy for her to connect with anyone other than her adoptive parents, but that hasn't kept her from leading a quietly happy life, until now. Suddenly Willow's world is tragically changed when her parents both die in a car crash, leaving her alone in a baffling world. The triumph of this book is that it is not a tragedy. This extraordinarily odd but extraordinarily endearing girl manages to push through her grief. Her journey to find a fascinatingly diverse and fully believable surrogate family is a joy and a revelation to read."
}
];

const seedBooks = () => Post.bulkCreate(postData);

module.exports = seedBooks;