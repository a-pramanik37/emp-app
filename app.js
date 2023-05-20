// User defined class Node
class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

//Linkedlist class
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        //creating a new node
        let node = new Node(element);

        //to store current node
        let current;

        //if the list is empty add the elemen and make it head

        if(this.head==null){
            this.head = node;
        }

        else {
            current = this.head;

            //iterate to the end of the list
            while (current.next){
                current = current.next;
            }
            //add node
            current.next = node;
        }
        //increment the size
        this.size++;

    }

    insertAt(element, index) {

        if(index<0 || index>this.size){
            return console.log("Please enter a valid index.");
        }

        else {
            //creates a new node
            let node = new Node(element);
            let curr, prev;

            curr = this.head;
            //add the element to the first index
            if(index==0){
                node.next = this.head;
                this.head = node;
            }
            else {
                curr = this.head;
                var it = 0;

                //iterate over the list to find the position to insert
                while(it < index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                //adding an element
                node.next = curr;
                prev.next = node;

            }
            this.size++;
        }

    }

    //removes an element from the specified location
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("Plese enter a valid index");
        }

        else{
            var curr, prev, it=0;
            curr = this.head;
            prev = curr;

            //deleting the first element
            if(index===0){
                this.head = curr.next;
            }
            else{
                //iterate over the list to the position to remove an element
                while(it<index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;

            }
            this.size--;

            //return the remove element
            return curr.element;
        }

    }

    //removes a given element from the list
    removeElement(element){
        let current = this.head;
        let prev = null;

        //iterate over the list
        while(current!=null){
            //comparing element with current element if found then remove the element and return true
            if(current.element===element){
                if(prev==null){
                    this.head = current.next;
                }
                else{
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }

        return -1;

    }

    getValueAt(index){
        let count = 0;
        let current = this.head;
        if(index < 0 || index >= this.size){
            return console.log("Plese enter a valid index");
        }
        else{
            while(current!=null){
                if(index==count) return current.element;
                current = current.next;
                count++
            }
        }
    }

    //finds the index of element
    indexOf(element){
        let count = 0;
        let current = this.head;

        //iterate over the list
        while(current!=null){
            //compare each element of the list with given element
            if(current.element === element)
            return count;

            count++;
            current = current.next;
        }
        //not found
        return console.log(`Item ${element} was not found in the list.`);
    }

    //checks the list for empty
    isEmpty(){
        return this.size == 0;
    }

    //gives the size of the list
    size_of_list(){
       return this.size;
    }


    //prints the list items
    printList(){
        let curr = this.head;
        let str = "";

        while(curr){
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }


}




//class for custom list with a certain data type
class CustomList {
    constructor(dataType) {
        this.linkedList = new LinkedList();
        this.dataType = dataType;
    }
    //method for adding an item
    add(item){
        if(typeof item !== this.dataType) {
            console.log(`Invalid data type, only ${this.dataType} is allowed.`);
            return;
        }
        this.linkedList.add(item);
    }

    //insert an item in a specific index
    insertAt(item, index){
        this.linkedList.insertAt(item, index);
    }
    getValueAt(index){
        return this.linkedList.getValueAt(index);
    }
    //remove an item from a specific index
    removeFrom(index){
        return console.log("Removed item is "+this.linkedList.removeFrom(index));
    }
    //remove a particular item from the list (which appears first)
    removeElement(item){
        return this.linkedList.removeElement(item);
    }
    //return the index of a particular item
    indexOf(item){
        return this.linkedList.indexOf(item);
    }
    //to check if the list is empty or not
    isEmpty(){
        return this.linkedList.isEmpty();
    }
    //returns the size of the list
    size_of_list(){
        return this.linkedList.size_of_list();
    }
    //prints the list
    printList(){
        this.linkedList.printList();
    }

}

//Output demonstration

// let myList = new CustomList("number");

// myList.add(6); //outputs nothing
// myList.add('harun'); //output: Invalid data type, only number is allowed.
// myList.add(10);
// myList.add(20);
// myList.insertAt(400, -1); //output: Please enter a valid index.
// myList.insertAt(400, 2); //inserted
// myList.printList(); // output: 6 10 400 20
// myList.removeFrom(2); //output: Removed item is 400
// myList.printList() //output: 6 10 20
// myList.removeElement(100); //output: Item 100 is not present in the list
// myList.removeElement(20); //output: Removed item is 20
// myList.printList(); //output: 6 10
// myList.indexOf(10); //output: Index of 10 is 1

// let l = new CustomList("string");
// l.add("fdfds");
// l.add("yrytr")
// console.log(l.size_of_list());

// let ll = new LinkedList();
// ll.add("dfdfd");
// ll.add("tetew");
// console.log(ll.size_of_list());

