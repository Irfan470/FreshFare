// // pages/api/categories/[id].js

// export default function handler(req, res) {
//   const { id } = req.query;

//   // Fetch category data based on the id from your database or another data source
//   // Example: Assuming you have a categories array
//   const categories = [
//     {
//       id: "659ea1d81705fa5b4ed5e30d",
//       name: "fruits",
//     },
//     {
//       id: "659ea1d81705fa5b4ed5e30e",
//       name: "vegetables",
//     },
//     {
//       id: "65ae6a2ebcfc8695c06a5efd",
//       name: "dairy",
//     },
//     // ... other categories
//   ];

//   const category = categories.find((cat) => cat.id === id);

//   if (!category) {
//     return res.status(404).json({ error: "Category not found" });
//   }

//   res.status(200).json(category);
// }
