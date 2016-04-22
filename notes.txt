[notes]

export todo;
module.exports.Todo = Todo;
reaquire('todo').Todo

export default Todo;
module.exports = Todo;
new reaquire('todo')()


<input type="text" value="12345" />
react จะ render ทับ ถ้าพิมพ์ input ลงไป ทำให้เราพิมพ์ input ไม่ได้


<input type="text" onChange={this.onChange.bind(this)} />
โยน onChange ไปให้ react ทำ จึง ต้อง bind ไม่งั้ น undefine อารมณ์ประมาณ เลื่อน pointer


this.setState({value: e.target.value});
ต้องใช้ setState มิฉะนั้น ความหาจะบังเกิด ไม่อัพเดต สถานะ React Render ทับทันที





แก้ state ต้อง setState เสมอ ไม่งั้น ไม่ render ให้
onAdd() {
	this.state.todo.push({
		title: title,
		done: false
	});
	this.setState({todo: this.state.todo});
}


[life-cycle]
constructor --> viewMount --> render --> didMount 
	--> componentViewRecieveProps (เมื่อมีการแก้ props)
	--> shouldComponentUpdate (return true componentViewUpdate --> update --> render) คล้ายๆ iOS viewDidLoad
	--> ComponentWillUpdate
	--> render
	--> ComponentDidUpdate
	--> ComponentWillUnmount (ตอนถอด)


checked={this.state.checked} --> state เรียกได้ แต่ ห้ามแก้


<li style={{
	textDecoration: this.state.checked ? "line-through" : "none"
}}>
ปีกกาแรก เพื่อให้ javascript อีก อันซ้อนกันคือ object
