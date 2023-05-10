class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord: boolean = false;
}

class Trie {
  root: TrieNode = new TrieNode();

  insert(word: string): void {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currNode.children.has(char)) {
        currNode.children.set(char, new TrieNode());
      }
      currNode = currNode.children.get(char)!;
    }
    currNode.isEndOfWord = true;
  }

  search(word: string): boolean {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!currNode.children.has(char)) {
        return false;
      }
      currNode = currNode.children.get(char)!;
    }
    return currNode.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let currNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!currNode.children.has(char)) {
        return false;
      }
      currNode = currNode.children.get(char)!;
    }
    return true;
  }
}
