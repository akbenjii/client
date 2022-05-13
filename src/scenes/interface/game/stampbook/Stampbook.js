import { SimpleButton, Button, Interactive } from '@components/components'
import Book from '@scenes/interface/books/Book'
import BookStamp from './BookStamp'

/* START OF COMPILED CODE */

export default class Stampbook extends Book {

	constructor() {
		super("Stampbook");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("stampbook-pack", "assets/media/interface/game/stampbook/stampbook-pack.json");
	}

	/** @returns {void} */
	_create() {

		// blocker
		const blocker = this.add.rectangle(760, 480, 1520, 960);
		blocker.isFilled = true;
		blocker.fillColor = 0;
		blocker.fillAlpha = 0.2;

		// editor_background
		const editor_background = this.add.sprite(760, 480, "stampbook", "editor_background");
		editor_background.visible = false;

		// buttons
		const buttons = this.add.container(95, 152);
		buttons.visible = false;

		// bg
		const bg = this.add.image(620, 328, "stampbook", "bg");
		buttons.add(bg);

		// close
		const close = this.add.image(1297, 0, "stampbook", "close");
		buttons.add(close);

		// page_back
		const page_back = this.add.image(0, 605, "stampbook", "page_back");
		buttons.add(page_back);

		// page_forward
		const page_forward = this.add.image(1298, 608, "stampbook", "page_forward");
		buttons.add(page_forward);

		// dividers
		const dividers = this.add.image(688, -16, "stampbook", "dividers");
		buttons.add(dividers);

		// pagenum
		const pagenum = this.add.text(1130, -58, "", {});
		pagenum.text = "Page\n1 of 29";
		pagenum.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
		buttons.add(pagenum);

		// stampcategory
		const stampcategory = this.add.text(898, -66, "", {});
		stampcategory.text = "Total Stamps:";
		stampcategory.setStyle({ "align": "right", "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		buttons.add(stampcategory);

		// stampnum
		const stampnum = this.add.text(944, -33, "", {});
		stampnum.text = "888/888";
		stampnum.setStyle({ "align": "right", "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		buttons.add(stampnum);

		// pagename
		const pagename = this.add.text(104, -79, "", {});
		pagename.text = "Contents";
		pagename.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		buttons.add(pagename);

		// page3
		const page3 = this.add.container(0, 0);
		page3.visible = false;

		// page2
		const page2 = this.add.container(0, 0);
		page2.visible = false;

		// pagebgs_contents
		const pagebgs_contents = this.add.image(744, 705, "stampbook", "pagebgs/contents");
		page2.add(pagebgs_contents);

		// page1
		const page1 = this.add.container(0, 0);

		// cover
		const cover = this.add.sprite(743, 480, "stampbook", "colour/1");
		page1.add(cover);

		// pattern
		const pattern = this.add.sprite(740, 480, "stampbook", "pattern/1");
		pattern.alpha = 0.15;
		pattern.alphaTopLeft = 0.15;
		pattern.alphaTopRight = 0.15;
		pattern.alphaBottomLeft = 0.15;
		pattern.alphaBottomRight = 0.15;
		page1.add(pattern);

		// clasp_bg
		const clasp_bg = this.add.sprite(1358, 480, "stampbook", "clasp");
		page1.add(clasp_bg);

		// clasp
		const clasp = this.add.sprite(1338, 472, "stampbook", "clasp/1");
		page1.add(clasp);

		// total
		const total = this.add.text(467, 754, "", {});
		total.text = "Total Stamps 888/888";
		total.setStyle({ "color": "#F4B851", "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
		page1.add(total);

		// username
		const username = this.add.text(253, 639, "", {});
		username.text = "Username";
		username.setStyle({ "color": "#F4B851", "fontFamily": "Burbank Small", "fontSize": "100px", "fontStyle": "bold", "shadow.offsetX":3,"shadow.offsetY":3,"shadow.fill":true});
		page1.add(username);

		// edit
		const edit = this.add.sprite(1465, 897, "stampbook", "edit");
		page1.add(edit);

		// grey_button
		const grey_button = this.add.image(1358, 159, "main", "grey-button");
		page1.add(grey_button);

		// grey_x
		const grey_x = this.add.image(1358, 157, "main", "grey-x");
		page1.add(grey_x);

		// editor
		const editor = this.add.container(0, 0);
		editor.visible = false;

		// editor_top
		const editor_top = this.add.sprite(787, 37, "stampbook", "editor_top");
		editor.add(editor_top);

		// editor_side
		const editor_side = this.add.sprite(56, 243, "stampbook", "editor_side");
		editor.add(editor_side);

		// claspthumb
		const claspthumb = this.add.sprite(76, 445, "stampbook", "thumbs/clasp/1");
		editor.add(claspthumb);

		// claspselect
		const claspselect = this.add.container(205, 375);
		claspselect.visible = false;
		editor.add(claspselect);

		// claspselect_bg
		const claspselect_bg = this.add.image(51, 73, "stampbook", "editor_options");
		claspselect.add(claspselect_bg);

		// thumbs_clasp_1
		const thumbs_clasp_1 = this.add.image(0, 0, "stampbook", "thumbs/clasp/1");
		thumbs_clasp_1.scaleX = 0.7;
		thumbs_clasp_1.scaleY = 0.7;
		claspselect.add(thumbs_clasp_1);

		// thumbs_clasp_2
		const thumbs_clasp_2 = this.add.image(103, 0, "stampbook", "thumbs/clasp/2");
		thumbs_clasp_2.scaleX = 0.7;
		thumbs_clasp_2.scaleY = 0.7;
		claspselect.add(thumbs_clasp_2);

		// thumbs_clasp_3
		const thumbs_clasp_3 = this.add.image(0, 72, "stampbook", "thumbs/clasp/3");
		thumbs_clasp_3.scaleX = 0.7;
		thumbs_clasp_3.scaleY = 0.7;
		claspselect.add(thumbs_clasp_3);

		// thumbs_clasp_4
		const thumbs_clasp_4 = this.add.image(103, 72, "stampbook", "thumbs/clasp/4");
		thumbs_clasp_4.scaleX = 0.7;
		thumbs_clasp_4.scaleY = 0.7;
		claspselect.add(thumbs_clasp_4);

		// thumbs_clasp_5
		const thumbs_clasp_5 = this.add.image(0, 145, "stampbook", "thumbs/clasp/5");
		thumbs_clasp_5.scaleX = 0.7;
		thumbs_clasp_5.scaleY = 0.7;
		claspselect.add(thumbs_clasp_5);

		// thumbs_clasp_6
		const thumbs_clasp_6 = this.add.image(103, 144, "stampbook", "thumbs/clasp/6");
		thumbs_clasp_6.scaleX = 0.7;
		thumbs_clasp_6.scaleY = 0.7;
		claspselect.add(thumbs_clasp_6);

		// patternthumb
		const patternthumb = this.add.sprite(76, 328, "stampbook", "thumbs/color/1");
		editor.add(patternthumb);

		// patternselect
		const patternselect = this.add.container(205, 261);
		patternselect.visible = false;
		editor.add(patternselect);

		// patternselect_bg
		const patternselect_bg = this.add.image(51, 73, "stampbook", "editor_options");
		patternselect.add(patternselect_bg);

		// thumbs_pattern_1
		const thumbs_pattern_1 = this.add.image(0, 0, "stampbook", "thumbs/pattern/1");
		thumbs_pattern_1.scaleX = 0.7;
		thumbs_pattern_1.scaleY = 0.7;
		patternselect.add(thumbs_pattern_1);

		// thumbs_pattern_2
		const thumbs_pattern_2 = this.add.image(103, 0, "stampbook", "thumbs/pattern/2");
		thumbs_pattern_2.scaleX = 0.7;
		thumbs_pattern_2.scaleY = 0.7;
		patternselect.add(thumbs_pattern_2);

		// thumbs_pattern_3
		const thumbs_pattern_3 = this.add.image(0, 72, "stampbook", "thumbs/pattern/3");
		thumbs_pattern_3.scaleX = 0.7;
		thumbs_pattern_3.scaleY = 0.7;
		patternselect.add(thumbs_pattern_3);

		// thumbs_pattern_4
		const thumbs_pattern_4 = this.add.image(103, 72, "stampbook", "thumbs/pattern/4");
		thumbs_pattern_4.scaleX = 0.7;
		thumbs_pattern_4.scaleY = 0.7;
		patternselect.add(thumbs_pattern_4);

		// thumbs_pattern_5
		const thumbs_pattern_5 = this.add.image(0, 145, "stampbook", "thumbs/pattern/5");
		thumbs_pattern_5.scaleX = 0.7;
		thumbs_pattern_5.scaleY = 0.7;
		patternselect.add(thumbs_pattern_5);

		// thumbs_pattern_6
		const thumbs_pattern_6 = this.add.image(103, 144, "stampbook", "thumbs/pattern/6");
		thumbs_pattern_6.scaleX = 0.7;
		thumbs_pattern_6.scaleY = 0.7;
		patternselect.add(thumbs_pattern_6);

		// colorthumb
		const colorthumb = this.add.sprite(76, 215, "stampbook", "thumbs/color/1");
		editor.add(colorthumb);

		// colorselect
		const colorselect = this.add.container(205, 145);
		colorselect.visible = false;
		editor.add(colorselect);

		// colorselect_bg
		const colorselect_bg = this.add.image(51, 73, "stampbook", "editor_options");
		colorselect.add(colorselect_bg);

		// thumbs_color_1
		const thumbs_color_1 = this.add.image(0, 0, "stampbook", "thumbs/color/1");
		thumbs_color_1.scaleX = 0.7;
		thumbs_color_1.scaleY = 0.7;
		colorselect.add(thumbs_color_1);

		// thumbs_color_2
		const thumbs_color_2 = this.add.image(103, 0, "stampbook", "thumbs/color/2");
		thumbs_color_2.scaleX = 0.7;
		thumbs_color_2.scaleY = 0.7;
		colorselect.add(thumbs_color_2);

		// thumbs_color_3
		const thumbs_color_3 = this.add.image(0, 72, "stampbook", "thumbs/color/3");
		thumbs_color_3.scaleX = 0.7;
		thumbs_color_3.scaleY = 0.7;
		colorselect.add(thumbs_color_3);

		// thumbs_color_4
		const thumbs_color_4 = this.add.image(103, 72, "stampbook", "thumbs/color/4");
		thumbs_color_4.scaleX = 0.7;
		thumbs_color_4.scaleY = 0.7;
		colorselect.add(thumbs_color_4);

		// thumbs_color_5
		const thumbs_color_5 = this.add.image(0, 145, "stampbook", "thumbs/color/5");
		thumbs_color_5.scaleX = 0.7;
		thumbs_color_5.scaleY = 0.7;
		colorselect.add(thumbs_color_5);

		// thumbs_color_6
		const thumbs_color_6 = this.add.image(103, 144, "stampbook", "thumbs/color/6");
		thumbs_color_6.scaleX = 0.7;
		thumbs_color_6.scaleY = 0.7;
		colorselect.add(thumbs_color_6);

		// save
		const save = this.add.image(1463, 899, "stampbook", "save");
		editor.add(save);

		// lists
		const pages = [page1, page2, page3];

		// blocker (components)
		new Interactive(blocker);

		// close (components)
		const closeButton = new Button(close);
		closeButton.spriteName = "close";
		closeButton.callback = () => super.close();

		// page_back (components)
		const page_backSimpleButton = new SimpleButton(page_back);
		page_backSimpleButton.callback = () => super.prevPage();

		// page_forward (components)
		const page_forwardSimpleButton = new SimpleButton(page_forward);
		page_forwardSimpleButton.callback = () => super.nextPage();

		// clasp_bg (components)
		const clasp_bgSimpleButton = new SimpleButton(clasp_bg);
		clasp_bgSimpleButton.callback = () => super.nextPage();

		// edit (components)
		const editButton = new Button(edit);
		editButton.spriteName = "edit";
		editButton.callback = () => this.editStampbook();
		editButton.activeFrame = false;

		// grey_button (components)
		const grey_buttonButton = new Button(grey_button);
		grey_buttonButton.spriteName = "grey-button";
		grey_buttonButton.callback = () => super.close();

		// claspthumb (components)
		const claspthumbSimpleButton = new SimpleButton(claspthumb);
		claspthumbSimpleButton.callback = () => this.openClasp();

		// thumbs_clasp_1 (components)
		const thumbs_clasp_1SimpleButton = new SimpleButton(thumbs_clasp_1);
		thumbs_clasp_1SimpleButton.callback = () => this.changeClasp(1);

		// thumbs_clasp_2 (components)
		const thumbs_clasp_2SimpleButton = new SimpleButton(thumbs_clasp_2);
		thumbs_clasp_2SimpleButton.callback = () => this.changeClasp(2);

		// thumbs_clasp_3 (components)
		const thumbs_clasp_3SimpleButton = new SimpleButton(thumbs_clasp_3);
		thumbs_clasp_3SimpleButton.callback = () => this.changeClasp(3);

		// thumbs_clasp_4 (components)
		const thumbs_clasp_4SimpleButton = new SimpleButton(thumbs_clasp_4);
		thumbs_clasp_4SimpleButton.callback = () => this.changeClasp(4);

		// thumbs_clasp_5 (components)
		const thumbs_clasp_5SimpleButton = new SimpleButton(thumbs_clasp_5);
		thumbs_clasp_5SimpleButton.callback = () => this.changeClasp(5);

		// thumbs_clasp_6 (components)
		const thumbs_clasp_6SimpleButton = new SimpleButton(thumbs_clasp_6);
		thumbs_clasp_6SimpleButton.callback = () => this.changeClasp(6);

		// patternthumb (components)
		const patternthumbSimpleButton = new SimpleButton(patternthumb);
		patternthumbSimpleButton.callback = () => this.openPattern();

		// thumbs_pattern_1 (components)
		const thumbs_pattern_1SimpleButton = new SimpleButton(thumbs_pattern_1);
		thumbs_pattern_1SimpleButton.callback = () => this.changePattern(1);

		// thumbs_pattern_2 (components)
		const thumbs_pattern_2SimpleButton = new SimpleButton(thumbs_pattern_2);
		thumbs_pattern_2SimpleButton.callback = () => this.changePattern(2);

		// thumbs_pattern_3 (components)
		const thumbs_pattern_3SimpleButton = new SimpleButton(thumbs_pattern_3);
		thumbs_pattern_3SimpleButton.callback = () => this.changePattern(3);

		// thumbs_pattern_4 (components)
		const thumbs_pattern_4SimpleButton = new SimpleButton(thumbs_pattern_4);
		thumbs_pattern_4SimpleButton.callback = () => this.changePattern(4);

		// thumbs_pattern_5 (components)
		const thumbs_pattern_5SimpleButton = new SimpleButton(thumbs_pattern_5);
		thumbs_pattern_5SimpleButton.callback = () => this.changePattern(5);

		// thumbs_pattern_6 (components)
		const thumbs_pattern_6SimpleButton = new SimpleButton(thumbs_pattern_6);
		thumbs_pattern_6SimpleButton.callback = () => this.changePattern(6);

		// colorthumb (components)
		const colorthumbSimpleButton = new SimpleButton(colorthumb);
		colorthumbSimpleButton.callback = () => this.openColour();

		// thumbs_color_1 (components)
		const thumbs_color_1SimpleButton = new SimpleButton(thumbs_color_1);
		thumbs_color_1SimpleButton.callback = () => this.changeColor(1);

		// thumbs_color_2 (components)
		const thumbs_color_2SimpleButton = new SimpleButton(thumbs_color_2);
		thumbs_color_2SimpleButton.callback = () => this.changeColor(2);

		// thumbs_color_3 (components)
		const thumbs_color_3SimpleButton = new SimpleButton(thumbs_color_3);
		thumbs_color_3SimpleButton.callback = () => this.changeColor(3);

		// thumbs_color_4 (components)
		const thumbs_color_4SimpleButton = new SimpleButton(thumbs_color_4);
		thumbs_color_4SimpleButton.callback = () => this.changeColor(4);

		// thumbs_color_5 (components)
		const thumbs_color_5SimpleButton = new SimpleButton(thumbs_color_5);
		thumbs_color_5SimpleButton.callback = () => this.changeColor(5);

		// thumbs_color_6 (components)
		const thumbs_color_6SimpleButton = new SimpleButton(thumbs_color_6);
		thumbs_color_6SimpleButton.callback = () => this.changeColor(6);

		// save (components)
		const saveSimpleButton = new SimpleButton(save);
		saveSimpleButton.callback = () => this.saveStampbook();

		this.blocker = blocker;
		this.editor_background = editor_background;
		this.buttons = buttons;
		this.bg = bg;
		this.close = close;
		this.page_back = page_back;
		this.page_forward = page_forward;
		this.dividers = dividers;
		this.pagenum = pagenum;
		this.stampcategory = stampcategory;
		this.stampnum = stampnum;
		this.pagename = pagename;
		this.page3 = page3;
		this.page2 = page2;
		this.pagebgs_contents = pagebgs_contents;
		this.page1 = page1;
		this.cover = cover;
		this.pattern = pattern;
		this.clasp_bg = clasp_bg;
		this.clasp = clasp;
		this.total = total;
		this.username = username;
		this.edit = edit;
		this.editor = editor;
		this.editor_top = editor_top;
		this.editor_side = editor_side;
		this.claspthumb = claspthumb;
		this.claspselect = claspselect;
		this.claspselect_bg = claspselect_bg;
		this.thumbs_clasp_1 = thumbs_clasp_1;
		this.thumbs_clasp_2 = thumbs_clasp_2;
		this.thumbs_clasp_3 = thumbs_clasp_3;
		this.thumbs_clasp_4 = thumbs_clasp_4;
		this.thumbs_clasp_5 = thumbs_clasp_5;
		this.thumbs_clasp_6 = thumbs_clasp_6;
		this.patternthumb = patternthumb;
		this.patternselect = patternselect;
		this.patternselect_bg = patternselect_bg;
		this.thumbs_pattern_1 = thumbs_pattern_1;
		this.thumbs_pattern_2 = thumbs_pattern_2;
		this.thumbs_pattern_3 = thumbs_pattern_3;
		this.thumbs_pattern_4 = thumbs_pattern_4;
		this.thumbs_pattern_5 = thumbs_pattern_5;
		this.thumbs_pattern_6 = thumbs_pattern_6;
		this.colorthumb = colorthumb;
		this.colorselect = colorselect;
		this.colorselect_bg = colorselect_bg;
		this.thumbs_color_1 = thumbs_color_1;
		this.thumbs_color_2 = thumbs_color_2;
		this.thumbs_color_3 = thumbs_color_3;
		this.thumbs_color_4 = thumbs_color_4;
		this.thumbs_color_5 = thumbs_color_5;
		this.thumbs_color_6 = thumbs_color_6;
		this.save = save;
		this.pages = pages;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	blocker;
	/** @type {Phaser.GameObjects.Sprite} */
	editor_background;
	/** @type {Phaser.GameObjects.Container} */
	buttons;
	/** @type {Phaser.GameObjects.Image} */
	bg;
	/** @type {Phaser.GameObjects.Image} */
	close;
	/** @type {Phaser.GameObjects.Image} */
	page_back;
	/** @type {Phaser.GameObjects.Image} */
	page_forward;
	/** @type {Phaser.GameObjects.Image} */
	dividers;
	/** @type {Phaser.GameObjects.Text} */
	pagenum;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory;
	/** @type {Phaser.GameObjects.Text} */
	stampnum;
	/** @type {Phaser.GameObjects.Text} */
	pagename;
	/** @type {Phaser.GameObjects.Container} */
	page3;
	/** @type {Phaser.GameObjects.Container} */
	page2;
	/** @type {Phaser.GameObjects.Image} */
	pagebgs_contents;
	/** @type {Phaser.GameObjects.Container} */
	page1;
	/** @type {Phaser.GameObjects.Sprite} */
	cover;
	/** @type {Phaser.GameObjects.Sprite} */
	pattern;
	/** @type {Phaser.GameObjects.Sprite} */
	clasp_bg;
	/** @type {Phaser.GameObjects.Sprite} */
	clasp;
	/** @type {Phaser.GameObjects.Text} */
	total;
	/** @type {Phaser.GameObjects.Text} */
	username;
	/** @type {Phaser.GameObjects.Sprite} */
	edit;
	/** @type {Phaser.GameObjects.Container} */
	editor;
	/** @type {Phaser.GameObjects.Sprite} */
	editor_top;
	/** @type {Phaser.GameObjects.Sprite} */
	editor_side;
	/** @type {Phaser.GameObjects.Sprite} */
	claspthumb;
	/** @type {Phaser.GameObjects.Container} */
	claspselect;
	/** @type {Phaser.GameObjects.Image} */
	claspselect_bg;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_clasp_1;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_clasp_2;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_clasp_3;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_clasp_4;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_clasp_5;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_clasp_6;
	/** @type {Phaser.GameObjects.Sprite} */
	patternthumb;
	/** @type {Phaser.GameObjects.Container} */
	patternselect;
	/** @type {Phaser.GameObjects.Image} */
	patternselect_bg;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_pattern_1;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_pattern_2;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_pattern_3;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_pattern_4;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_pattern_5;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_pattern_6;
	/** @type {Phaser.GameObjects.Sprite} */
	colorthumb;
	/** @type {Phaser.GameObjects.Container} */
	colorselect;
	/** @type {Phaser.GameObjects.Image} */
	colorselect_bg;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_color_1;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_color_2;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_color_3;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_color_4;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_color_5;
	/** @type {Phaser.GameObjects.Image} */
	thumbs_color_6;
	/** @type {Phaser.GameObjects.Image} */
	save;
	/** @type {Phaser.GameObjects.Container[]} */
	pages;

	/* START-USER-CODE */

	// Write your code here


	create() {
		this.key = 'Stampbook'
		super.create();
		
		this.test = new BookStamp(this, 280, 283, 7);
		this.add.existing(this.test)
	}

	changeClasp(id){
		this.clasp.setFrame("clasp/" + id)
		this.claspthumb.setFrame("thumbs/clasp/" + id)
		this.claspselect.visible = false
	}

	changePattern(id){
		if (id == 0) {
			this.pattern.visible = false
			this.patternthumb.setFrame("thumbs/color/1")
		}
		else{
			this.pattern.setFrame("pattern/" + id)
			this.patternthumb.setFrame("thumbs/pattern/" + id)
			this.patternselect.visible = false
		}
	}

	changeColor(id){
		this.cover.setFrame("colour/" + id)
		this.colorthumb.setFrame("thumbs/color/" + id)
		this.colorselect.visible = false
	}

	openClasp(){
		this.hideAll()
		this.claspselect.visible = true
	}

	openColour(){
		this.hideAll()
		this.colorselect.visible = true
	}

	openPattern(){
		this.hideAll()
		this.patternselect.visible = true
	}

	hideAll(){
		this.claspselect.visible = false
		this.colorselect.visible = false
		this.patternselect.visible = false
	}

	editStampbook(){
		this.editor_background.visible = true
		this.editor.visible = true
		this.edit.visible = false
	}

	saveStampbook(){
		this.editor_background.visible = false
		this.editor.visible = false
		this.edit.visible = true
	}

	addPageStamps(){
		
		var posArray = [] 
		
		for (var x in this.pageStamps[page]) {
			let id = this.pageStamps[page][x]
			this.pageStamps[page][x] = new BookStamp(this, 280, 283, id);
			this.add.existing(this.pageStamps[page][x]);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
