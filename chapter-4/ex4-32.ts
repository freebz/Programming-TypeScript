// 4.2.5 한정된 다형성

type TreeNode = {
    value: string
}
type LeafNode = TreeNode & {
    isLeaf: true
}
type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}


let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

let a1 = mapNode(a, _ => _.toUpperCase())  // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase())  // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase())  // InnerNode


function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
): T {
    return {
	...node,
	value: f(node.value)
    }
}
