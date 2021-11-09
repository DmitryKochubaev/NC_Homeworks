class Node {                //класс узлов
    constructor(value) {
        this.value = value; // значение узла
        this.left = null;   // ссылка на левого ребенка
        this.right = null; // ссылка на правого
    }
}

class BinaryTree {  //класс деревьев
    constructor() {
        this.root = null;       //пустой корень дерева
    }

    add(value) {            //функция добаления нового узла
        const newNode = new Node(value)
        if(!this.root) {                //добавление значения в корень
            this.root = newNode;
            return;
        }

        let currentNode = this.root;                        //выбираем корень текущим узлом

        while(currentNode) {                                //запускаем цикл сравнений
            if(newNode.value < currentNode.value) {            //меньшие значения отправляем в левую ветку
                if(!currentNode.left) {                         
                    currentNode.left = newNode;
                    return;
                }

                currentNode = currentNode.left;                 //если в левой ветке уже есть значение, выбираем этот узел текущим
            } else {
                if(!currentNode.right) {                        //с правой веткой в точности наоборот
                    currentNode.right = newNode;
                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }

    depthRound(func, node) {             //обход в глубину
        if(!node) {
           return;
        }

        if(func) {
            func(node);
        }

        this.depthRound(func, node.left);
        this.depthRound(func, node.right);
    }

    widthRound(func) {              //обход в ширину
        const order = [this.root];

        while(order.length) {
            const node = order.shift();
            func(node);

            if(node.left) {
                order.push(node.left);
            }

            if(node.right) {
                order.push(node.right);
            }
        }
    }
}

const testTree = new BinaryTree();

testTree.add(3);
testTree.add(5);
testTree.add(2);
testTree.add(8);
testTree.add(7);
testTree.add(11);
testTree.add(5);
testTree.add(3);
testTree.add(5);

testTree.depthRound((node) => {
    console.log(node.value);
}, testTree.root);

testTree.widthRound((node) => {
    console.log(node.value);
})