
Const connection = async () => {
try {

 await mongoose.connect(mongodb+srv://samrajunejo1:SamraShahzad2020@cluster0.jruqfox.mongodb.net/?retryWrites=true&w=majority);
} catch (error)
{
    console.log(error);
}
};
connection();