class Block {
    public index:number;
    public hash:string;
    public previousHahs: string;
    public data: string;
    public timestamp: number;
    constructor(index:number,
    hash:string,
    previousHahs: string,
    data: string,
    timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHahs = previousHahs;
        this.data = data;
        this.timestamp = timestamp
    }
}

const genesisBlock:Block = new Block(0, "202020202020202", "", "hello", 1235524);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain)
export{};