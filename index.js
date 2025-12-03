import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Use title instead



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//What
// app.use(methodOverride('_method'));



// app.use(express.static("public"))
// app.use(express.static("images"))
app.use(express.static(path.join(__dirname, 'public')));
//IF we have this structure:
// project/
//   ├── public/
//   │   ├── css/
//   │   │   └── index.css
//   │   ├── images/
//   │   │   └── ramen.svg
//   │   └── index.html
app.use('/images', express.static(path.join(__dirname, 'images')));
//IF we have this structure:
// project/
//   ├── images/
//   │   └── ramen.svg
//   └── public/
//       ├── css/
//       └── index.html

// app.use('/images', express.static(...))
// Then Express serves /images/ramen.svg → from the /images folder outside of /public.
//background: url('/images/ramen.svg');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) // make sure were doing an absolute path

app.get("/", (req, res) => {
    console.log("Hi there!");
    res.sendFile(path.join(__dirname, "index.html"));
    
    if (newRecipes.type === 'sweet') {
    if (newRecipes) {
    const title = newRecipes.map(r => r.title);
    return res.render(path.join(__dirname, "views", "sweet.ejs"), 
    { recipe:newRecipes, title});
}
res.send("No sweet recipes found.");
    // res.sendFile(path.join(__dirname, "index.html"));
};
    // res.render(path.join(__dirname, "views", "index.ejs"));
    // res.render(/views/index.ejs);
});

app.get("/savoury", (req, res) => {
    const savouryRecipes = newRecipes.filter(r => r.type === "savoury")

    if (savouryRecipes.length > 0) {
        const title = savouryRecipes.map(r => r.title)
        return res.render(path.join(__dirname, "views", "savoury.ejs"),
        {recipe:savouryRecipes});
    }
    res.send("No savoury recipes found.");
});

app.get("/sweet", (req, res) => {
    const sweetRecipes = newRecipes.filter(r => r.type === "sweet");
if (newRecipes) {
    const title = sweetRecipes.map(r => r.title);
    return res.render(path.join(__dirname, "views", "sweet.ejs"),
    { recipe:sweetRecipes});
}
res.send("No sweet recipes found.");
    // res.sendFile(path.join(__dirname, "index.html"));
});

// app.get("/sweet/cheesecake", (req, res) => {
//     res.render(path.join(__dirname, "views", "cheesecake.ejs"));
// })

app.get("/sweet/:title", (req, res) => {
    let {title} = req.params;
    console.log(req.params);
    const recipe = newRecipes.find(r => r.title === title);//whattt
    console.log("recipe:", recipe);
    
    // if (recipes) {
    //     const type  = newRecipes.find(r => r.title === title);
    // }

    // { if (r.title === recipes.title) {
    // const { ingredients, instructions } = r;

    res.render(path.join(__dirname, "views", `new-recipe.ejs`), { recipe, title });
});


app.get("/savoury/:title", (req, res ) => {
    let { title } = req.params
    console.log(req.params);
    const recipe = newRecipes.map(r => r.title === title)
    console.log("recipe:", recipe);

    res.render(path.join(__dirname, "views", `new-recipe.ejs`), { recipe, title });
})

app.get("/add", (req, res) => {
    res.render(path.join(__dirname, "public", "add.html"));
    // res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit-recipe",(req,res)=>{
    const recipe = req.body;
    
    



    res.send("Recipe received! Thank you for your submission.");
    console.log("New recipe submitted:", recipe);

});

//             <% recipe.ingredients.forEach(item => { %>
//            <% }) %>

let newRecipes = [
        {
    type: "savoury",
    title: "pizza",
    ingredients:[
                "225g all-purpose flour",
                "1/2 tsp baking soda",
                "170g unsalted butter, melted",
                "200g brown sugar",
                "100g granulated sugar",
                "1 tbsp vanilla extract",
                "1 large egg + 1 egg yolk",
                "300g chocolate chips" 
                ],
    instructions:
                [
                "Preheat the oven to 175°C (350°F).",
                "In a bowl, whisk together the flour and baking soda.",
                "In another bowl, mix the melted butter, brown sugar, and granulated sugar until well combined.",
                "Add the vanilla extract, egg, and egg yolk to the butter-sugar mixture and mix well.",
                "Gradually add the dry ingredients to the wet ingredients and mix until just combined.",
                "Fold in the chocolate chips.",
                "Drop spoonfuls of dough onto a baking sheet lined with parchment paper.",
                "Bake for 10-12 minutes or until the edges are golden brown.",
                "Let the cookies cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
                ]
            },

    {
    type: "sweet",
    title: "cookies",
    ingredients:[
                "225g all-purpose flour",
                "1/2 tsp baking soda",
                "170g unsalted butter, melted",
                "200g brown sugar",
                "100g granulated sugar",
                "1 tbsp vanilla extract",
                "1 large egg + 1 egg yolk",
                "300g chocolate chips"
                ],
    instructions:
                [
                "Preheat the oven to 175°C (350°F).",
                "In a bowl, whisk together the flour and baking soda.",
                "In another bowl, mix the melted butter, brown sugar, and granulated sugar until well combined.",
                "Add the vanilla extract, egg, and egg yolk to the butter-sugar mixture and mix well.",
                "Gradually add the dry ingredients to the wet ingredients and mix until just combined.",
                "Fold in the chocolate chips.",
                "Drop spoonfuls of dough onto a baking sheet lined with parchment paper.",
                "Bake for 10-12 minutes or until the edges are golden brown.",
                "Let the cookies cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
                ]
            },
            {
    type: "sweet",
    title: "cheesecake",
    ingredients:
            [
                "200g digestive biscuits",
                "100g unsalted butter, melted",
                "600g cream cheese",
                "100g powdered sugar",
                "1 tsp vanilla extract",
                "200ml double cream",
                "Fresh berries for topping"
            ],
    instructions:
            [
                "Preheat the oven to 160°C (320°F).",
                "In a bowl, mix the crushed digestive biscuits with the melted butter.",
                "Press the mixture into the bottom of a springform cake tin to form the base.",
                "In another bowl, beat the cream cheese, powdered sugar, and vanilla extract until smooth.",
                "In a separate bowl, whip the double cream until soft peaks form.",
                "Fold the whipped cream into the cream cheese mixture.",
                "Pour the filling onto the biscuit base and smooth the top.",
                "Bake for 45-50 minutes or until set.",
                "Let it cool, then refrigerate for at least 4 hours before serving.",
                "Top with fresh berries before serving."
            ]
        },
        {
    type: "sweet",
    title: "donuts",
    ingredients:
            [
                "240ml warm milk",
                "100g granulated sugar",
                "2 tsp active dry yeast",
                "2 large eggs",
                "60g unsalted butter, melted",
                "500g all-purpose flour",
                "1/2 tsp salt",
                "Vegetable oil for frying",
                "Powdered sugar for dusting"
            ],
    instructions:
            [
                "In a bowl, combine warm milk, sugar, and yeast. Let it sit for 5-10 minutes until frothy.",
                "In another bowl, whisk together the eggs and melted butter.",
                "Add the yeast mixture to the egg mixture and stir to combine.",
                "Gradually add the flour and salt, mixing until a dough forms.",
                "Knead the dough on a floured surface for about 5 minutes until smooth and elastic.",
                "Place the dough in a greased bowl, cover, and let it rise for about 1 hour or until doubled in size.",
                "Roll out the dough to about 1/2 inch thickness and cut out donut shapes using a donut cutter.",
                "Heat vegetable oil in a deep fryer or large pot to 175°C (350°F).",
                "Fry the donuts in batches until golden brown, about 1-2 minutes per side.",
                "Remove with a slotted spoon and drain on paper towels.",
                "Dust with powdered sugar before serving."
            ]
            },
            {
    type: "sweet",
    title: "ice-cream",
    ingredients:
            [
                "500ml heavy cream",
                "250ml whole milk",
                "150g granulated sugar",
                "1 tbsp vanilla extract",
                "Pinch of salt"
            ],
    instructions:
            [
                "In a bowl, whisk together the heavy cream, whole milk, sugar, vanilla extract, and salt until the sugar is dissolved.",
                "Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions.",
                "Once churned, transfer the ice cream to a lidded container and freeze for at least 4 hours or until firm.",
                "Serve and enjoy!"
            ]
            }
]

// {
//     // id: uuid(),
//     type:
//     title:
//     ingredients:
//     instructions:
// }


app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});

