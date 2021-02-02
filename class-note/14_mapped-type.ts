type Heros = "Hulk" | "Thor" | "Capt"
type HerosAges = { [p in Heros]: number}
const ages: HerosAges = {
    Hulk : 33,
    Thor : 100,
    Capt : 40
}