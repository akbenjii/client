import { SimpleButton, Button, Interactive, NineSlice } from '@components/components'
import Book from '@scenes/interface/books/Book'
import BookStamp from './BookStamp'
import PinLoader from "@engine/loaders/PinLoader";

/* START OF COMPILED CODE */

export default class Stampbook extends Book {

	constructor() {
		super("Stampbook");

		/* START-USER-CTR-CODE */
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

		// page38
		const page38 = this.add.container(0, 0);
		page38.visible = false;

		// creditsbody
		const creditsbody = this.add.text(471, 228, "", {});
		creditsbody.setOrigin(0.5, 0);
		creditsbody.text = "A massive thank you to:\n\namman#8104 - Owner\nSaber#5026 - Owner\nCairo#0001 - Administrator\nLEGOMAN#1112 - Administrator & Designer\nSahmyool#2935 - Administrator & Developer\ndirk#2732 - Developer\nCringe#8547 - Designer\nChigster#6026 - Designer\nhershey#0001 - Designer\nPunkQween#7281 - Designer\n𝒀𝒂𝒛#6140 - Designer\nTeilz#6930 - Designer\nTu8x#3764 - Designer\nbird#6574 - Designer";
		creditsbody.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
		page38.add(creditsbody);

		// pagenum38
		const pagenum38 = this.add.text(1225, 95, "", {});
		pagenum38.text = "Page\n29 of 29";
		pagenum38.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page38.add(pagenum38);

		// pagename38
		const pagename38 = this.add.text(336, 73, "", {});
		pagename38.text = "Credits";
		pagename38.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page38.add(pagename38);

		// communitythanks
		const communitythanks = this.add.text(769, 734, "", {});
		communitythanks.setOrigin(0.5, 0);
		communitythanks.text = "The CPForever team would like to thank every single person who has played CPF with their friends, talked in our Discord community, reported a bug, given a suggestion, and just generally made the community a great place to be a part of <3";
		communitythanks.setStyle({ "align": "center", "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
		communitythanks.setWordWrapWidth(1000);
		page38.add(communitythanks);

		// creditsicon
		const creditsicon = this.add.image(261, 118, "main", "mod");
		page38.add(creditsicon);

		// page37
		const page37 = this.add.container(0, 0);
		page37.visible = false;

		// pagenum37
		const pagenum37 = this.add.text(1225, 95, "", {});
		pagenum37.text = "Page\n28 of 29";
		pagenum37.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page37.add(pagenum37);

		// pagename37
		const pagename37 = this.add.text(201, 74, "", {});
		pagename37.text = "Statistics";
		pagename37.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page37.add(pagename37);

		// statistics
		const statistics = this.add.text(210, 217, "", {});
		statistics.text = "Loading statistics...";
		statistics.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
		page37.add(statistics);

		// page36
		const page36 = this.add.container(0, -2);
		page36.visible = false;

		// pagenum36
		const pagenum36 = this.add.text(1225, 95, "", {});
		pagenum36.text = "Page\n27 of 29";
		pagenum36.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page36.add(pagenum36);

		// stampnum36
		const stampnum36 = this.add.text(880, 120, "", {});
		stampnum36.text = "999";
		stampnum36.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page36.add(stampnum36);

		// stampcategory36
		const stampcategory36 = this.add.text(885, 87, "", {});
		stampcategory36.text = "Pins Collected:";
		stampcategory36.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page36.add(stampcategory36);

		// pagename36
		const pagename36 = this.add.text(329, 74, "", {});
		pagename36.text = "Pins";
		pagename36.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page36.add(pagename36);

		// pageicon36
		const pageicon36 = this.add.image(255, 120, "stampbook", "categories/9001");
		page36.add(pageicon36);

		// page35
		const page35 = this.add.container(0, -1);
		page35.visible = false;

		// pagebg35
		const pagebg35 = this.add.image(744, 862, "stampbook", "pagebgs/treasurehunt");
		pagebg35.setOrigin(0.5, 1);
		page35.add(pagebg35);

		// pagenum35
		const pagenum35 = this.add.text(1225, 95, "", {});
		pagenum35.text = "Page\n26 of 29";
		pagenum35.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page35.add(pagenum35);

		// stampnum35
		const stampnum35 = this.add.text(880, 120, "", {});
		stampnum35.text = "5/5";
		stampnum35.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page35.add(stampnum35);

		// stampcategory35
		const stampcategory35 = this.add.text(885, 87, "", {});
		stampcategory35.text = "Treasure Hunt:";
		stampcategory35.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page35.add(stampcategory35);

		// pagename35
		const pagename35 = this.add.text(329, 74, "", {});
		pagename35.text = "Treasure Hunt";
		pagename35.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page35.add(pagename35);

		// pageicon35
		const pageicon35 = this.add.image(255, 120, "stampbook", "categories/56");
		page35.add(pageicon35);

		// page34
		const page34 = this.add.container(0, -1);
		page34.visible = false;

		// pagebg34
		const pagebg34 = this.add.image(744, 862, "stampbook", "pagebgs/thinice");
		pagebg34.setOrigin(0.5, 1);
		page34.add(pagebg34);

		// pagenum34
		const pagenum34 = this.add.text(1225, 95, "", {});
		pagenum34.text = "Page\n25 of 29";
		pagenum34.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page34.add(pagenum34);

		// stampnum34
		const stampnum34 = this.add.text(880, 120, "", {});
		stampnum34.text = "9/9";
		stampnum34.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page34.add(stampnum34);

		// stampcategory34
		const stampcategory34 = this.add.text(885, 87, "", {});
		stampcategory34.text = "Thin Ice:";
		stampcategory34.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page34.add(stampcategory34);

		// pagename34
		const pagename34 = this.add.text(329, 74, "", {});
		pagename34.text = "Thin Ice";
		pagename34.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page34.add(pagename34);

		// pageicon34
		const pageicon34 = this.add.image(255, 120, "stampbook", "categories/16");
		page34.add(pageicon34);

		// page33
		const page33 = this.add.container(0, -1);
		page33.visible = false;

		// pagebg33
		const pagebg33 = this.add.image(744, 862, "stampbook", "pagebgs/defender");
		pagebg33.setOrigin(0.5, 1);
		page33.add(pagebg33);

		// pagenum33
		const pagenum33 = this.add.text(1225, 95, "", {});
		pagenum33.text = "Page\n24 of 29";
		pagenum33.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page33.add(pagenum33);

		// stampnum33
		const stampnum33 = this.add.text(880, 120, "", {});
		stampnum33.text = "14/14";
		stampnum33.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page33.add(stampnum33);

		// stampcategory33
		const stampcategory33 = this.add.text(885, 87, "", {});
		stampcategory33.text = "System Defender:";
		stampcategory33.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page33.add(stampcategory33);

		// pagename33
		const pagename33 = this.add.text(329, 74, "", {});
		pagename33.text = "System Defender";
		pagename33.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page33.add(pagename33);

		// pageicon33
		const pageicon33 = this.add.image(255, 120, "stampbook", "categories/46");
		page33.add(pageicon33);

		// page32
		const page32 = this.add.container(0, -1);
		page32.visible = false;

		// pagebg32
		const pagebg32 = this.add.image(744, 862, "stampbook", "pagebgs/smoothie");
		pagebg32.setOrigin(0.5, 1);
		page32.add(pagebg32);

		// pagenum32
		const pagenum32 = this.add.text(1225, 95, "", {});
		pagenum32.text = "Page\n23 of 29";
		pagenum32.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page32.add(pagenum32);

		// stampnum32
		const stampnum32 = this.add.text(880, 120, "", {});
		stampnum32.text = "16/16";
		stampnum32.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page32.add(stampnum32);

		// stampcategory32
		const stampcategory32 = this.add.text(885, 87, "", {});
		stampcategory32.text = "Smoothie Smash";
		stampcategory32.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page32.add(stampcategory32);

		// pagename32
		const pagename32 = this.add.text(329, 74, "", {});
		pagename32.text = "Smoothie Smash";
		pagename32.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page32.add(pagename32);

		// pageicon32
		const pageicon32 = this.add.image(255, 120, "stampbook", "categories/58");
		page32.add(pageicon32);

		// page31
		const page31 = this.add.container(0, -1);
		page31.visible = false;

		// pagebg31
		const pagebg31 = this.add.image(744, 862, "stampbook", "pagebgs/pufflescape");
		pagebg31.setOrigin(0.5, 1);
		page31.add(pagebg31);

		// pagenum31
		const pagenum31 = this.add.text(1225, 95, "", {});
		pagenum31.text = "Page\n22 of 29";
		pagenum31.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page31.add(pagenum31);

		// stampnum31
		const stampnum31 = this.add.text(880, 120, "", {});
		stampnum31.text = "11/11";
		stampnum31.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page31.add(stampnum31);

		// stampcategory31
		const stampcategory31 = this.add.text(885, 87, "", {});
		stampcategory31.text = "Pufflescape:";
		stampcategory31.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page31.add(stampcategory31);

		// pagename31
		const pagename31 = this.add.text(329, 74, "", {});
		pagename31.text = "Pufflescape";
		pagename31.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page31.add(pagename31);

		// pageicon31
		const pageicon31 = this.add.image(255, 120, "stampbook", "categories/57");
		page31.add(pageicon31);

		// page30
		const page30 = this.add.container(0, -1);
		page30.visible = false;

		// pagebg30
		const pagebg30 = this.add.image(744, 862, "stampbook", "pagebgs/rescue");
		pagebg30.setOrigin(0.5, 1);
		page30.add(pagebg30);

		// pagenum30
		const pagenum30 = this.add.text(1225, 95, "", {});
		pagenum30.text = "Page\n21 of 29";
		pagenum30.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page30.add(pagenum30);

		// stampnum30
		const stampnum30 = this.add.text(880, 120, "", {});
		stampnum30.text = "27/27";
		stampnum30.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page30.add(stampnum30);

		// stampcategory30
		const stampcategory30 = this.add.text(885, 87, "", {});
		stampcategory30.text = "Puffle Rescue:";
		stampcategory30.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page30.add(stampcategory30);

		// pagename30
		const pagename30 = this.add.text(329, 74, "", {});
		pagename30.text = "Puffle Rescue";
		pagename30.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page30.add(pagename30);

		// pageicon30
		const pageicon30 = this.add.image(255, 120, "stampbook", "categories/19");
		page30.add(pageicon30);

		// page29
		const page29 = this.add.container(0, -1);
		page29.visible = false;

		// pagebg29
		const pagebg29 = this.add.image(744, 862, "stampbook", "pagebgs/rescue");
		pagebg29.setOrigin(0.5, 1);
		page29.add(pagebg29);

		// pagenum29
		const pagenum29 = this.add.text(1225, 95, "", {});
		pagenum29.text = "Page\n21 of 29";
		pagenum29.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page29.add(pagenum29);

		// stampnum29
		const stampnum29 = this.add.text(880, 120, "", {});
		stampnum29.text = "27/27";
		stampnum29.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page29.add(stampnum29);

		// stampcategory29
		const stampcategory29 = this.add.text(885, 87, "", {});
		stampcategory29.text = "Puffle Rescue:";
		stampcategory29.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page29.add(stampcategory29);

		// pagename29
		const pagename29 = this.add.text(329, 74, "", {});
		pagename29.text = "Puffle Rescue";
		pagename29.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page29.add(pagename29);

		// pageicon29
		const pageicon29 = this.add.image(255, 120, "stampbook", "categories/19");
		page29.add(pageicon29);

		// page28
		const page28 = this.add.container(0, -1);
		page28.visible = false;

		// pagebg28
		const pagebg28 = this.add.image(744, 862, "stampbook", "pagebgs/pufflelaunch");
		pagebg28.setOrigin(0.5, 1);
		page28.add(pagebg28);

		// pagenum28
		const pagenum28 = this.add.text(1225, 95, "", {});
		pagenum28.text = "Page\n20 of 29";
		pagenum28.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page28.add(pagenum28);

		// stampnum28
		const stampnum28 = this.add.text(880, 120, "", {});
		stampnum28.text = "14/14";
		stampnum28.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page28.add(stampnum28);

		// stampcategory28
		const stampcategory28 = this.add.text(885, 87, "", {});
		stampcategory28.text = "Puffle Launch:";
		stampcategory28.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page28.add(stampcategory28);

		// pagename28
		const pagename28 = this.add.text(329, 74, "", {});
		pagename28.text = "Puffle Launch";
		pagename28.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page28.add(pagename28);

		// pageicon28
		const pageicon28 = this.add.image(255, 120, "stampbook", "categories/48");
		page28.add(pageicon28);

		// page27
		const page27 = this.add.container(0, -1);
		page27.visible = false;

		// pagebg27
		const pagebg27 = this.add.image(744, 862, "stampbook", "pagebgs/pizzatron");
		pagebg27.setOrigin(0.5, 1);
		page27.add(pagebg27);

		// pagenum27
		const pagenum27 = this.add.text(1225, 95, "", {});
		pagenum27.text = "Page\n19 of 29";
		pagenum27.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page27.add(pagenum27);

		// stampnum27
		const stampnum27 = this.add.text(880, 120, "", {});
		stampnum27.text = "10/10";
		stampnum27.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page27.add(stampnum27);

		// stampcategory27
		const stampcategory27 = this.add.text(885, 87, "", {});
		stampcategory27.text = "Pizzatron 3000:";
		stampcategory27.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page27.add(stampcategory27);

		// pagename27
		const pagename27 = this.add.text(329, 74, "", {});
		pagename27.text = "Pizzatron 3000";
		pagename27.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page27.add(pagename27);

		// pageicon27
		const pageicon27 = this.add.image(255, 120, "stampbook", "categories/54");
		page27.add(pageicon27);

		// page26
		const page26 = this.add.container(0, -1);
		page26.visible = false;

		// pagebg26
		const pagebg26 = this.add.image(744, 862, "stampbook", "pagebgs/missions");
		pagebg26.setOrigin(0.5, 1);
		page26.add(pagebg26);

		// pagenum26
		const pagenum26 = this.add.text(1225, 95, "", {});
		pagenum26.text = "Page\n18 of 29";
		pagenum26.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page26.add(pagenum26);

		// stampnum26
		const stampnum26 = this.add.text(880, 120, "", {});
		stampnum26.text = "22/22";
		stampnum26.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page26.add(stampnum26);

		// stampcategory26
		const stampcategory26 = this.add.text(885, 87, "", {});
		stampcategory26.text = "Missions:";
		stampcategory26.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page26.add(stampcategory26);

		// pagename26
		const pagename26 = this.add.text(329, 74, "", {});
		pagename26.text = "Missions";
		pagename26.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page26.add(pagename26);

		// pageicon26
		const pageicon26 = this.add.image(255, 120, "stampbook", "categories/22");
		page26.add(pageicon26);

		// page25
		const page25 = this.add.container(0, -1);
		page25.visible = false;

		// pagebg25
		const pagebg25 = this.add.image(744, 862, "stampbook", "pagebgs/missions");
		pagebg25.setOrigin(0.5, 1);
		page25.add(pagebg25);

		// pagenum25
		const pagenum25 = this.add.text(1225, 95, "", {});
		pagenum25.text = "Page\n18 of 29";
		pagenum25.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page25.add(pagenum25);

		// stampnum25
		const stampnum25 = this.add.text(880, 120, "", {});
		stampnum25.text = "22/22";
		stampnum25.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page25.add(stampnum25);

		// stampcategory25
		const stampcategory25 = this.add.text(885, 87, "", {});
		stampcategory25.text = "Missions:";
		stampcategory25.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page25.add(stampcategory25);

		// pagename25
		const pagename25 = this.add.text(329, 74, "", {});
		pagename25.text = "Missions";
		pagename25.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page25.add(pagename25);

		// pageicon25
		const pageicon25 = this.add.image(255, 120, "stampbook", "categories/22");
		page25.add(pageicon25);

		// page24
		const page24 = this.add.container(0, -1);
		page24.visible = false;

		// pagebg24
		const pagebg24 = this.add.image(744, 862, "stampbook", "pagebgs/jetpack");
		pagebg24.setOrigin(0.5, 1);
		page24.add(pagebg24);

		// pagenum24
		const pagenum24 = this.add.text(1225, 95, "", {});
		pagenum24.text = "Page\n17 of 29";
		pagenum24.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page24.add(pagenum24);

		// stampnum24
		const stampnum24 = this.add.text(880, 120, "", {});
		stampnum24.text = "20/20";
		stampnum24.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page24.add(stampnum24);

		// stampcategory24
		const stampcategory24 = this.add.text(885, 87, "", {});
		stampcategory24.text = "Jet Pack Adventure:";
		stampcategory24.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page24.add(stampcategory24);

		// pagename24
		const pagename24 = this.add.text(329, 90, "", {});
		pagename24.text = "Jet Pack Adventure";
		pagename24.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
		page24.add(pagename24);

		// pageicon24
		const pageicon24 = this.add.image(255, 120, "stampbook", "categories/11");
		page24.add(pageicon24);

		// page23
		const page23 = this.add.container(0, -1);
		page23.visible = false;

		// pagebg23
		const pagebg23 = this.add.image(744, 862, "stampbook", "pagebgs/jetpack");
		pagebg23.setOrigin(0.5, 1);
		page23.add(pagebg23);

		// pagenum23
		const pagenum23 = this.add.text(1225, 95, "", {});
		pagenum23.text = "Page\n16 of 29";
		pagenum23.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page23.add(pagenum23);

		// stampnum23
		const stampnum23 = this.add.text(880, 120, "", {});
		stampnum23.text = "20/20";
		stampnum23.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page23.add(stampnum23);

		// stampcategory23
		const stampcategory23 = this.add.text(885, 87, "", {});
		stampcategory23.text = "Jet Pack Adventure:";
		stampcategory23.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page23.add(stampcategory23);

		// pagename23
		const pagename23 = this.add.text(329, 90, "", {});
		pagename23.text = "Jet Pack Adventure";
		pagename23.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
		page23.add(pagename23);

		// pageicon23
		const pageicon23 = this.add.image(255, 120, "stampbook", "categories/11");
		page23.add(pageicon23);

		// page22
		const page22 = this.add.container(0, -1);
		page22.visible = false;

		// pagebg22
		const pagebg22 = this.add.image(744, 862, "stampbook", "pagebgs/fishing");
		pagebg22.setOrigin(0.5, 1);
		page22.add(pagebg22);

		// pagenum22
		const pagenum22 = this.add.text(1225, 95, "", {});
		pagenum22.text = "Page\n15 of 29";
		pagenum22.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page22.add(pagenum22);

		// stampnum22
		const stampnum22 = this.add.text(880, 120, "", {});
		stampnum22.text = "12/12";
		stampnum22.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page22.add(stampnum22);

		// stampcategory22
		const stampcategory22 = this.add.text(885, 87, "", {});
		stampcategory22.text = "Ice Fishing:";
		stampcategory22.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page22.add(stampcategory22);

		// pagename22
		const pagename22 = this.add.text(329, 74, "", {});
		pagename22.text = "Ice Fishing";
		pagename22.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page22.add(pagename22);

		// pageicon22
		const pageicon22 = this.add.image(255, 120, "stampbook", "categories/52");
		page22.add(pageicon22);

		// page21
		const page21 = this.add.container(0, 0);
		page21.visible = false;

		// pagebg21
		const pagebg21 = this.add.image(744, 862, "stampbook", "pagebgs/waves");
		pagebg21.setOrigin(0.5, 1);
		page21.add(pagebg21);

		// pagenum21
		const pagenum21 = this.add.text(1225, 95, "", {});
		pagenum21.text = "Page\n14 of 29";
		pagenum21.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page21.add(pagenum21);

		// stampnum21
		const stampnum21 = this.add.text(880, 120, "", {});
		stampnum21.text = "22/22";
		stampnum21.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page21.add(stampnum21);

		// stampcategory21
		const stampcategory21 = this.add.text(885, 87, "", {});
		stampcategory21.text = "Catchin' Waves";
		stampcategory21.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page21.add(stampcategory21);

		// pagename21
		const pagename21 = this.add.text(329, 74, "", {});
		pagename21.text = "Catchin' Waves";
		pagename21.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page21.add(pagename21);

		// pageicon21
		const pageicon21 = this.add.image(255, 120, "stampbook", "categories/15");
		page21.add(pageicon21);

		// page20
		const page20 = this.add.container(0, -1);
		page20.visible = false;

		// pagebg20
		const pagebg20 = this.add.image(744, 862, "stampbook", "pagebgs/waves");
		pagebg20.setOrigin(0.5, 1);
		page20.add(pagebg20);

		// pagenum20
		const pagenum20 = this.add.text(1225, 95, "", {});
		pagenum20.text = "Page\n14 of 29";
		pagenum20.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page20.add(pagenum20);

		// stampnum20
		const stampnum20 = this.add.text(880, 120, "", {});
		stampnum20.text = "22/22";
		stampnum20.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page20.add(stampnum20);

		// stampcategory20
		const stampcategory20 = this.add.text(885, 87, "", {});
		stampcategory20.text = "Catchin' Waves:";
		stampcategory20.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page20.add(stampcategory20);

		// pagename20
		const pagename20 = this.add.text(329, 74, "", {});
		pagename20.text = "Catchin' Waves";
		pagename20.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page20.add(pagename20);

		// pageicon20
		const pageicon20 = this.add.image(255, 120, "stampbook", "categories/15");
		page20.add(pageicon20);

		// page19
		const page19 = this.add.container(0, 0);
		page19.visible = false;

		// pagebg19
		const pagebg19 = this.add.image(744, 862, "stampbook", "pagebgs/surfer");
		pagebg19.setOrigin(0.5, 1);
		page19.add(pagebg19);

		// pagenum19
		const pagenum19 = this.add.text(1225, 95, "", {});
		pagenum19.text = "Page\n13 of 29";
		pagenum19.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page19.add(pagenum19);

		// stampnum19
		const stampnum19 = this.add.text(880, 120, "", {});
		stampnum19.text = "12/12";
		stampnum19.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page19.add(stampnum19);

		// stampcategory19
		const stampcategory19 = this.add.text(885, 87, "", {});
		stampcategory19.text = "Cart Surfer:";
		stampcategory19.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page19.add(stampcategory19);

		// pagename19
		const pagename19 = this.add.text(329, 74, "", {});
		pagename19.text = "Cart Surfer";
		pagename19.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page19.add(pagename19);

		// pageicon19
		const pageicon19 = this.add.image(255, 120, "stampbook", "categories/28");
		page19.add(pageicon19);

		// page18
		const page18 = this.add.container(0, 0);
		page18.visible = false;

		// pagebg18
		const pagebg18 = this.add.image(744, 862, "stampbook", "pagebgs/waterjitsu");
		pagebg18.setOrigin(0.5, 1);
		page18.add(pagebg18);

		// pagenum18
		const pagenum18 = this.add.text(1225, 95, "", {});
		pagenum18.text = "Page\n12 of 29";
		pagenum18.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page18.add(pagenum18);

		// stampnum18
		const stampnum18 = this.add.text(880, 120, "", {});
		stampnum18.text = "8/8";
		stampnum18.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page18.add(stampnum18);

		// stampcategory18
		const stampcategory18 = this.add.text(885, 87, "", {});
		stampcategory18.text = "Card-Jitsu Water:";
		stampcategory18.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page18.add(stampcategory18);

		// pagename18
		const pagename18 = this.add.text(329, 74, "", {});
		pagename18.text = "Card-Jitsu Water";
		pagename18.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page18.add(pagename18);

		// pageicon18
		const pageicon18 = this.add.image(255, 120, "stampbook", "categories/34");
		page18.add(pageicon18);

		// page17
		const page17 = this.add.container(0, 0);
		page17.visible = false;

		// pagebg17
		const pagebg17 = this.add.image(744, 862, "stampbook", "pagebgs/snowjitsu");
		pagebg17.setOrigin(0.5, 1);
		page17.add(pagebg17);

		// pagenum17
		const pagenum17 = this.add.text(1225, 95, "", {});
		pagenum17.text = "Page\n11 of 29";
		pagenum17.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page17.add(pagenum17);

		// stampnum17
		const stampnum17 = this.add.text(880, 120, "", {});
		stampnum17.text = "21/21\n";
		stampnum17.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page17.add(stampnum17);

		// stampcategory17
		const stampcategory17 = this.add.text(885, 87, "", {});
		stampcategory17.text = "Card-Jitsu Snow:";
		stampcategory17.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page17.add(stampcategory17);

		// pagename17
		const pagename17 = this.add.text(329, 74, "", {});
		pagename17.text = "Card-Jitsu Snow";
		pagename17.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page17.add(pagename17);

		// pageicon17
		const pageicon17 = this.add.image(255, 120, "stampbook", "categories/60");
		page17.add(pageicon17);

		// page16
		const page16 = this.add.container(0, 0);
		page16.visible = false;

		// pagebg16
		const pagebg16 = this.add.image(744, 862, "stampbook", "pagebgs/snowjitsu");
		pagebg16.setOrigin(0.5, 1);
		page16.add(pagebg16);

		// pagenum16
		const pagenum16 = this.add.text(1225, 95, "", {});
		pagenum16.text = "Page\n11 of 29";
		pagenum16.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page16.add(pagenum16);

		// stampnum16
		const stampnum16 = this.add.text(880, 120, "", {});
		stampnum16.text = "21/21";
		stampnum16.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page16.add(stampnum16);

		// stampcategory16
		const stampcategory16 = this.add.text(885, 87, "", {});
		stampcategory16.text = "Card-Jitsu Snow:";
		stampcategory16.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page16.add(stampcategory16);

		// pagename16
		const pagename16 = this.add.text(329, 74, "", {});
		pagename16.text = "Card-Jitsu Snow";
		pagename16.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page16.add(pagename16);

		// pageicon16
		const pageicon16 = this.add.image(255, 120, "stampbook", "categories/60");
		page16.add(pageicon16);

		// page15
		const page15 = this.add.container(0, 0);
		page15.visible = false;

		// pagebg15
		const pagebg15 = this.add.image(744, 862, "stampbook", "pagebgs/firejitsu");
		pagebg15.setOrigin(0.5, 1);
		page15.add(pagebg15);

		// pagenum15
		const pagenum15 = this.add.text(1225, 95, "", {});
		pagenum15.text = "Page\n10 of 29";
		pagenum15.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page15.add(pagenum15);

		// stampnum15
		const stampnum15 = this.add.text(880, 120, "", {});
		stampnum15.text = "8/8";
		stampnum15.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page15.add(stampnum15);

		// stampcategory15
		const stampcategory15 = this.add.text(885, 87, "", {});
		stampcategory15.text = "Card-Jitsu Fire:";
		stampcategory15.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page15.add(stampcategory15);

		// pagename15
		const pagename15 = this.add.text(329, 74, "", {});
		pagename15.text = "Card-Jitsu Fire";
		pagename15.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page15.add(pagename15);

		// pageicon15
		const pageicon15 = this.add.image(255, 120, "stampbook", "categories/32");
		page15.add(pageicon15);

		// page14
		const page14 = this.add.container(0, 0);
		page14.visible = false;

		// pagebg14
		const pagebg14 = this.add.image(744, 862, "stampbook", "pagebgs/jitsu");
		pagebg14.setOrigin(0.5, 1);
		page14.add(pagebg14);

		// pagenum14
		const pagenum14 = this.add.text(1225, 95, "", {});
		pagenum14.text = "Page\n9 of 29";
		pagenum14.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page14.add(pagenum14);

		// stampnum14
		const stampnum14 = this.add.text(880, 120, "", {});
		stampnum14.text = "10/10";
		stampnum14.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page14.add(stampnum14);

		// stampcategory14
		const stampcategory14 = this.add.text(885, 87, "", {});
		stampcategory14.text = "Card Jitsu:";
		stampcategory14.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page14.add(stampcategory14);

		// pagename14
		const pagename14 = this.add.text(329, 74, "", {});
		pagename14.text = "Card Jitsu";
		pagename14.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page14.add(pagename14);

		// pageicon14
		const pageicon14 = this.add.image(255, 120, "stampbook", "categories/38");
		page14.add(pageicon14);

		// page13
		const page13 = this.add.container(0, 0);
		page13.visible = false;

		// pagebg13
		const pagebg13 = this.add.image(744, 862, "stampbook", "pagebgs/astro");
		pagebg13.setOrigin(0.5, 1);
		page13.add(pagebg13);

		// pagenum13
		const pagenum13 = this.add.text(1225, 95, "", {});
		pagenum13.text = "Page\n8 of 29";
		pagenum13.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page13.add(pagenum13);

		// stampnum13
		const stampnum13 = this.add.text(880, 120, "", {});
		stampnum13.text = "12/12";
		stampnum13.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page13.add(stampnum13);

		// stampcategory13
		const stampcategory13 = this.add.text(885, 87, "", {});
		stampcategory13.text = "Astro Barrier:";
		stampcategory13.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page13.add(stampcategory13);

		// pagename13
		const pagename13 = this.add.text(329, 74, "", {});
		pagename13.text = "Astro Barrier";
		pagename13.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page13.add(pagename13);

		// pageicon13
		const pageicon13 = this.add.image(255, 120, "stampbook", "categories/14");
		page13.add(pageicon13);

		// page12
		const page12 = this.add.container(0, 0);
		page12.visible = false;

		// pagebg12
		const pagebg12 = this.add.image(744, 862, "stampbook", "pagebgs/aqua");
		pagebg12.setOrigin(0.5, 1);
		page12.add(pagebg12);

		// pagenum12
		const pagenum12 = this.add.text(1225, 95, "", {});
		pagenum12.text = "Page\n7 of 29";
		pagenum12.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page12.add(pagenum12);

		// stampnum12
		const stampnum12 = this.add.text(880, 120, "", {});
		stampnum12.text = "20/20";
		stampnum12.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page12.add(stampnum12);

		// stampcategory12
		const stampcategory12 = this.add.text(885, 87, "", {});
		stampcategory12.text = "Aqua Grabber";
		stampcategory12.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page12.add(stampcategory12);

		// pagename12
		const pagename12 = this.add.text(329, 74, "", {});
		pagename12.text = "Aqua Grabber";
		pagename12.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page12.add(pagename12);

		// pageicon12
		const pageicon12 = this.add.image(255, 120, "stampbook", "categories/13");
		page12.add(pageicon12);

		// page11
		const page11 = this.add.container(0, 0);
		page11.visible = false;

		// pagebg11
		const pagebg11 = this.add.image(744, 862, "stampbook", "pagebgs/aqua");
		pagebg11.setOrigin(0.5, 1);
		page11.add(pagebg11);

		// pagenum11
		const pagenum11 = this.add.text(1225, 95, "", {});
		pagenum11.text = "Page\n7 of 29";
		pagenum11.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page11.add(pagenum11);

		// stampnum11
		const stampnum11 = this.add.text(880, 120, "", {});
		stampnum11.text = "20/20";
		stampnum11.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page11.add(stampnum11);

		// stampcategory11
		const stampcategory11 = this.add.text(885, 87, "", {});
		stampcategory11.text = "Aqua Grabber:";
		stampcategory11.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page11.add(stampcategory11);

		// pagename11
		const pagename11 = this.add.text(329, 74, "", {});
		pagename11.text = "Aqua Grabber";
		pagename11.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page11.add(pagename11);

		// pageicon11
		const pageicon11 = this.add.image(255, 120, "stampbook", "categories/13");
		page11.add(pageicon11);

		// page10
		const page10 = this.add.container(0, 0);
		page10.visible = false;

		// pagebg10
		const pagebg10 = this.add.image(744, 862, "stampbook", "pagebgs/games");
		pagebg10.setOrigin(0.5, 1);
		page10.add(pagebg10);

		// pagenum10
		const pagenum10 = this.add.text(1225, 95, "", {});
		pagenum10.text = "Page\n6 of 29";
		pagenum10.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page10.add(pagenum10);

		// stampnum10
		const stampnum10 = this.add.text(880, 120, "", {});
		stampnum10.text = "100/100";
		stampnum10.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page10.add(stampnum10);

		// stampcategory10
		const stampcategory10 = this.add.text(885, 87, "", {});
		stampcategory10.text = "Game Stamps:";
		stampcategory10.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page10.add(stampcategory10);

		// pagename10
		const pagename10 = this.add.text(329, 74, "", {});
		pagename10.text = "Games";
		pagename10.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page10.add(pagename10);

		// pageicon10
		const pageicon10 = this.add.image(255, 120, "stampbook", "categories/8");
		page10.add(pageicon10);

		// aquaText
		const aquaText = this.add.text(275, 231, "", {});
		aquaText.setOrigin(0, 0.5);
		aquaText.text = "Aqua Grabber";
		aquaText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		aquaText.setWordWrapWidth(140);
		page10.add(aquaText);

		// aquaIcon
		const aquaIcon = this.add.image(231, 231, "stampbook", "categories/13");
		aquaIcon.scaleX = 0.7;
		aquaIcon.scaleY = 0.7;
		page10.add(aquaIcon);

		// aquaButton
		const aquaButton = this.add.rectangle(314, 231, 240, 70);
		aquaButton.fillColor = 3729407;
		aquaButton.fillAlpha = 0.5;
		page10.add(aquaButton);

		// astroText
		const astroText = this.add.text(514, 231, "", {});
		astroText.setOrigin(0, 0.5);
		astroText.text = "Astro Barrier";
		astroText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		astroText.setWordWrapWidth(140);
		page10.add(astroText);

		// astroIcon
		const astroIcon = this.add.image(471, 231, "stampbook", "categories/14");
		astroIcon.scaleX = 0.7;
		astroIcon.scaleY = 0.7;
		page10.add(astroIcon);

		// astroButton
		const astroButton = this.add.rectangle(554, 231, 240, 70);
		astroButton.fillColor = 3729407;
		astroButton.fillAlpha = 0.5;
		page10.add(astroButton);

		// jitsuText
		const jitsuText = this.add.text(754, 231, "", {});
		jitsuText.setOrigin(0, 0.5);
		jitsuText.text = "Card-Jitsu";
		jitsuText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		jitsuText.setWordWrapWidth(140);
		page10.add(jitsuText);

		// jitsuIcon
		const jitsuIcon = this.add.image(712, 231, "stampbook", "categories/38");
		jitsuIcon.scaleX = 0.7;
		jitsuIcon.scaleY = 0.7;
		page10.add(jitsuIcon);

		// jitsuButton
		const jitsuButton = this.add.rectangle(794, 231, 240, 70);
		jitsuButton.fillColor = 3729407;
		jitsuButton.fillAlpha = 0.5;
		page10.add(jitsuButton);

		// fireJitsuText
		const fireJitsuText = this.add.text(994, 231, "", {});
		fireJitsuText.setOrigin(0, 0.5);
		fireJitsuText.text = "Card-Jitsu Fire";
		fireJitsuText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		fireJitsuText.setWordWrapWidth(140);
		page10.add(fireJitsuText);

		// fireJitsuIcon
		const fireJitsuIcon = this.add.image(953, 231, "stampbook", "categories/32");
		fireJitsuIcon.scaleX = 0.7;
		fireJitsuIcon.scaleY = 0.7;
		page10.add(fireJitsuIcon);

		// fireJitsuButton
		const fireJitsuButton = this.add.rectangle(1034, 231, 240, 70);
		fireJitsuButton.fillColor = 3729407;
		fireJitsuButton.fillAlpha = 0.5;
		page10.add(fireJitsuButton);

		// snowJitsuText
		const snowJitsuText = this.add.text(1230, 231, "", {});
		snowJitsuText.setOrigin(0, 0.5);
		snowJitsuText.text = "Card-Jitsu Snow";
		snowJitsuText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		snowJitsuText.setWordWrapWidth(160);
		page10.add(snowJitsuText);

		// snowJitsuIcon
		const snowJitsuIcon = this.add.image(1191, 231, "stampbook", "categories/60");
		snowJitsuIcon.scaleX = 0.7;
		snowJitsuIcon.scaleY = 0.7;
		page10.add(snowJitsuIcon);

		// snowJitsuButton
		const snowJitsuButton = this.add.rectangle(1274, 231, 240, 70);
		snowJitsuButton.fillColor = 3729407;
		snowJitsuButton.fillAlpha = 0.5;
		page10.add(snowJitsuButton);

		// waterJitsuText
		const waterJitsuText = this.add.text(275, 306, "", {});
		waterJitsuText.setOrigin(0, 0.5);
		waterJitsuText.text = "Card-Jitsu Water";
		waterJitsuText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		waterJitsuText.setWordWrapWidth(140);
		page10.add(waterJitsuText);

		// waterJistuIcon
		const waterJistuIcon = this.add.image(231, 306, "stampbook", "categories/34");
		waterJistuIcon.scaleX = 0.7;
		waterJistuIcon.scaleY = 0.7;
		page10.add(waterJistuIcon);

		// waterJitsuButton
		const waterJitsuButton = this.add.rectangle(314, 306, 240, 70);
		waterJitsuButton.fillColor = 3729407;
		waterJitsuButton.fillAlpha = 0.5;
		page10.add(waterJitsuButton);

		// cartSurferText
		const cartSurferText = this.add.text(514, 306, "", {});
		cartSurferText.setOrigin(0, 0.5);
		cartSurferText.text = "Cart Surfer";
		cartSurferText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		cartSurferText.setWordWrapWidth(140);
		page10.add(cartSurferText);

		// cartSurferIcon
		const cartSurferIcon = this.add.image(471, 306, "stampbook", "categories/28");
		cartSurferIcon.scaleX = 0.7;
		cartSurferIcon.scaleY = 0.7;
		page10.add(cartSurferIcon);

		// cartSurferButton
		const cartSurferButton = this.add.rectangle(554, 306, 240, 70);
		cartSurferButton.fillColor = 3729407;
		cartSurferButton.fillAlpha = 0.5;
		page10.add(cartSurferButton);

		// wavesText
		const wavesText = this.add.text(754, 306, "", {});
		wavesText.setOrigin(0, 0.5);
		wavesText.text = "Catchin Waves";
		wavesText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		wavesText.setWordWrapWidth(140);
		page10.add(wavesText);

		// wavesIcon
		const wavesIcon = this.add.image(712, 306, "stampbook", "categories/15");
		wavesIcon.scaleX = 0.7;
		wavesIcon.scaleY = 0.7;
		page10.add(wavesIcon);

		// wavesButton
		const wavesButton = this.add.rectangle(794, 306, 240, 70);
		wavesButton.fillColor = 3729407;
		wavesButton.fillAlpha = 0.5;
		page10.add(wavesButton);

		// fishingText
		const fishingText = this.add.text(994, 306, "", {});
		fishingText.setOrigin(0, 0.5);
		fishingText.text = "Ice Fishing";
		fishingText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		fishingText.setWordWrapWidth(140);
		page10.add(fishingText);

		// fishingIcon
		const fishingIcon = this.add.image(953, 306, "stampbook", "categories/52");
		fishingIcon.scaleX = 0.7;
		fishingIcon.scaleY = 0.7;
		page10.add(fishingIcon);

		// fishingButton
		const fishingButton = this.add.rectangle(1034, 306, 240, 70);
		fishingButton.fillColor = 3729407;
		fishingButton.fillAlpha = 0.5;
		page10.add(fishingButton);

		// jPAText
		const jPAText = this.add.text(1230, 306, "", {});
		jPAText.setOrigin(0, 0.5);
		jPAText.text = "Jet Pack Adventure";
		jPAText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		jPAText.setWordWrapWidth(160);
		page10.add(jPAText);

		// jPAIcon
		const jPAIcon = this.add.image(1191, 306, "stampbook", "categories/11");
		jPAIcon.scaleX = 0.7;
		jPAIcon.scaleY = 0.7;
		page10.add(jPAIcon);

		// jPAButton
		const jPAButton = this.add.rectangle(1274, 306, 240, 70);
		jPAButton.fillColor = 3729407;
		jPAButton.fillAlpha = 0.5;
		page10.add(jPAButton);

		// missionsText
		const missionsText = this.add.text(275, 382, "", {});
		missionsText.setOrigin(0, 0.5);
		missionsText.text = "Missions";
		missionsText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		missionsText.setWordWrapWidth(140);
		page10.add(missionsText);

		// missionsIcon
		const missionsIcon = this.add.image(231, 382, "stampbook", "categories/22");
		missionsIcon.scaleX = 0.7;
		missionsIcon.scaleY = 0.7;
		page10.add(missionsIcon);

		// missionsButton
		const missionsButton = this.add.rectangle(314, 382, 240, 70);
		missionsButton.fillColor = 3729407;
		missionsButton.fillAlpha = 0.5;
		page10.add(missionsButton);

		// pizzatronText
		const pizzatronText = this.add.text(514, 382, "", {});
		pizzatronText.setOrigin(0, 0.5);
		pizzatronText.text = "Pizzatron 3000";
		pizzatronText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		pizzatronText.setWordWrapWidth(140);
		page10.add(pizzatronText);

		// pizzatronIcon
		const pizzatronIcon = this.add.image(471, 382, "stampbook", "categories/54");
		pizzatronIcon.scaleX = 0.7;
		pizzatronIcon.scaleY = 0.7;
		page10.add(pizzatronIcon);

		// pizzatronButton
		const pizzatronButton = this.add.rectangle(554, 382, 240, 70);
		pizzatronButton.fillColor = 3729407;
		pizzatronButton.fillAlpha = 0.5;
		page10.add(pizzatronButton);

		// launchText
		const launchText = this.add.text(754, 382, "", {});
		launchText.setOrigin(0, 0.5);
		launchText.text = "Puffle Launch";
		launchText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		launchText.setWordWrapWidth(140);
		page10.add(launchText);

		// launchIcon
		const launchIcon = this.add.image(712, 382, "stampbook", "categories/48");
		launchIcon.scaleX = 0.7;
		launchIcon.scaleY = 0.7;
		page10.add(launchIcon);

		// launchButton
		const launchButton = this.add.rectangle(794, 382, 240, 70);
		launchButton.fillColor = 3729407;
		launchButton.fillAlpha = 0.5;
		page10.add(launchButton);

		// rescueText
		const rescueText = this.add.text(994, 382, "", {});
		rescueText.setOrigin(0, 0.5);
		rescueText.text = "Puffle Rescue";
		rescueText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		rescueText.setWordWrapWidth(140);
		page10.add(rescueText);

		// rescueIcon
		const rescueIcon = this.add.image(953, 382, "stampbook", "categories/19");
		rescueIcon.scaleX = 0.7;
		rescueIcon.scaleY = 0.7;
		page10.add(rescueIcon);

		// rescueButton
		const rescueButton = this.add.rectangle(1034, 382, 240, 70);
		rescueButton.fillColor = 3729407;
		rescueButton.fillAlpha = 0.5;
		page10.add(rescueButton);

		// pufflescapeText
		const pufflescapeText = this.add.text(1230, 382, "", {});
		pufflescapeText.setOrigin(0, 0.5);
		pufflescapeText.text = "Pufflescape";
		pufflescapeText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		pufflescapeText.setWordWrapWidth(160);
		page10.add(pufflescapeText);

		// pufflescapeIcon
		const pufflescapeIcon = this.add.image(1191, 382, "stampbook", "categories/57");
		pufflescapeIcon.scaleX = 0.7;
		pufflescapeIcon.scaleY = 0.7;
		page10.add(pufflescapeIcon);

		// pufflescapeButton
		const pufflescapeButton = this.add.rectangle(1274, 382, 240, 70);
		pufflescapeButton.fillColor = 3729407;
		pufflescapeButton.fillAlpha = 0.5;
		page10.add(pufflescapeButton);

		// smoothieText
		const smoothieText = this.add.text(275, 457, "", {});
		smoothieText.setOrigin(0, 0.5);
		smoothieText.text = "Smoothie Smash";
		smoothieText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		smoothieText.setWordWrapWidth(140);
		page10.add(smoothieText);

		// smoothieIcon
		const smoothieIcon = this.add.image(231, 457, "stampbook", "categories/58");
		smoothieIcon.scaleX = 0.7;
		smoothieIcon.scaleY = 0.7;
		page10.add(smoothieIcon);

		// smoothieButton
		const smoothieButton = this.add.rectangle(314, 457, 240, 70);
		smoothieButton.fillColor = 3729407;
		smoothieButton.fillAlpha = 0.5;
		page10.add(smoothieButton);

		// sysDefText
		const sysDefText = this.add.text(514, 457, "", {});
		sysDefText.setOrigin(0, 0.5);
		sysDefText.text = "System Defender";
		sysDefText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		sysDefText.setWordWrapWidth(140);
		page10.add(sysDefText);

		// sysDefIcon
		const sysDefIcon = this.add.image(471, 457, "stampbook", "categories/46");
		sysDefIcon.scaleX = 0.7;
		sysDefIcon.scaleY = 0.7;
		page10.add(sysDefIcon);

		// sysDefButton
		const sysDefButton = this.add.rectangle(554, 457, 240, 70);
		sysDefButton.fillColor = 3729407;
		sysDefButton.fillAlpha = 0.5;
		page10.add(sysDefButton);

		// thinIceText
		const thinIceText = this.add.text(754, 457, "", {});
		thinIceText.setOrigin(0, 0.5);
		thinIceText.text = "Thin Ice";
		thinIceText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		thinIceText.setWordWrapWidth(140);
		page10.add(thinIceText);

		// thinIceIcon
		const thinIceIcon = this.add.image(712, 457, "stampbook", "categories/16");
		thinIceIcon.scaleX = 0.7;
		thinIceIcon.scaleY = 0.7;
		page10.add(thinIceIcon);

		// thinIceButton
		const thinIceButton = this.add.rectangle(794, 457, 240, 70);
		thinIceButton.fillColor = 3729407;
		thinIceButton.fillAlpha = 0.5;
		page10.add(thinIceButton);

		// huntText
		const huntText = this.add.text(994, 457, "", {});
		huntText.setOrigin(0, 0.5);
		huntText.text = "Treasure Hunt";
		huntText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
		huntText.setWordWrapWidth(140);
		page10.add(huntText);

		// huntIcon
		const huntIcon = this.add.image(953, 457, "stampbook", "categories/56");
		huntIcon.scaleX = 0.7;
		huntIcon.scaleY = 0.7;
		page10.add(huntIcon);

		// huntButton
		const huntButton = this.add.rectangle(1034, 457, 240, 70);
		huntButton.fillColor = 3729407;
		huntButton.fillAlpha = 0.5;
		page10.add(huntButton);

		// page9
		const page9 = this.add.container(0, 0);
		page9.visible = false;

		// pagebg9
		const pagebg9 = this.add.image(744, 862, "stampbook", "pagebgs/activities");
		pagebg9.setOrigin(0.5, 1);
		page9.add(pagebg9);

		// pagenum9
		const pagenum9 = this.add.text(1225, 95, "", {});
		pagenum9.text = "Page\n5 of 29";
		pagenum9.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page9.add(pagenum9);

		// stampnum9
		const stampnum9 = this.add.text(880, 120, "", {});
		stampnum9.text = "35/35";
		stampnum9.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page9.add(stampnum9);

		// stampcategory9
		const stampcategory9 = this.add.text(885, 87, "", {});
		stampcategory9.text = "Activities:";
		stampcategory9.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page9.add(stampcategory9);

		// pagename9
		const pagename9 = this.add.text(329, 74, "", {});
		pagename9.text = "Activities";
		pagename9.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page9.add(pagename9);

		// pageicon9
		const pageicon9 = this.add.image(255, 120, "stampbook", "categories/7");
		page9.add(pageicon9);

		// page8
		const page8 = this.add.container(0, 0);
		page8.visible = false;

		// pagebg8
		const pagebg8 = this.add.image(744, 862, "stampbook", "pagebgs/mascots");
		pagebg8.setOrigin(0.5, 1);
		page8.add(pagebg8);

		// pagenum8
		const pagenum8 = this.add.text(1225, 95, "", {});
		pagenum8.text = "Page\n5 of 29";
		pagenum8.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page8.add(pagenum8);

		// stampnum8
		const stampnum8 = this.add.text(880, 120, "", {});
		stampnum8.text = "35/35";
		stampnum8.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page8.add(stampnum8);

		// stampcategory8
		const stampcategory8 = this.add.text(885, 87, "", {});
		stampcategory8.text = "Activities:";
		stampcategory8.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page8.add(stampcategory8);

		// pagename8
		const pagename8 = this.add.text(329, 74, "", {});
		pagename8.text = "Activities";
		pagename8.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page8.add(pagename8);

		// pageicon8
		const pageicon8 = this.add.image(255, 120, "stampbook", "categories/7");
		page8.add(pageicon8);

		// page7
		const page7 = this.add.container(0, 0);
		page7.visible = false;

		// pagebg7
		const pagebg7 = this.add.image(744, 749, "stampbook", "pagebgs/activities");
		pagebg7.setOrigin(0.5, 1);
		page7.add(pagebg7);

		// pagenum7
		const pagenum7 = this.add.text(1225, 95, "", {});
		pagenum7.text = "Page\n5 of 29";
		pagenum7.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page7.add(pagenum7);

		// stampnum7
		const stampnum7 = this.add.text(880, 120, "", {});
		stampnum7.text = "35/35";
		stampnum7.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page7.add(stampnum7);

		// stampcategory7
		const stampcategory7 = this.add.text(885, 87, "", {});
		stampcategory7.text = "Activities:";
		stampcategory7.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page7.add(stampcategory7);

		// pagename7
		const pagename7 = this.add.text(329, 74, "", {});
		pagename7.text = "Activities";
		pagename7.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page7.add(pagename7);

		// pageicon7
		const pageicon7 = this.add.image(255, 120, "stampbook", "categories/7");
		page7.add(pageicon7);

		// page6
		const page6 = this.add.container(0, 0);
		page6.visible = false;

		// pagebg6
		const pagebg6 = this.add.image(739, 853, "stampbook", "pagebgs/party");
		pagebg6.scaleX = 0.9;
		pagebg6.setOrigin(0.5, 1);
		page6.add(pagebg6);

		// pagenum6
		const pagenum6 = this.add.text(1225, 95, "", {});
		pagenum6.text = "Page\n4 of 29";
		pagenum6.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page6.add(pagenum6);

		// stampnum6
		const stampnum6 = this.add.text(880, 120, "", {});
		stampnum6.text = "24/24";
		stampnum6.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page6.add(stampnum6);

		// stampcategory6
		const stampcategory6 = this.add.text(885, 87, "", {});
		stampcategory6.text = "Party:";
		stampcategory6.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page6.add(stampcategory6);

		// pagename6
		const pagename6 = this.add.text(329, 74, "", {});
		pagename6.text = "Party";
		pagename6.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page6.add(pagename6);

		// pageicon6
		const pageicon6 = this.add.image(255, 120, "stampbook", "categories/23");
		page6.add(pageicon6);

		// page5
		const page5 = this.add.container(0, 0);
		page5.visible = false;

		// pagebg5
		const pagebg5 = this.add.image(739, 853, "stampbook", "pagebgs/party");
		pagebg5.scaleX = 0.9;
		pagebg5.scaleY = 0.9;
		pagebg5.setOrigin(0.5, 1);
		page5.add(pagebg5);

		// pagenum5
		const pagenum5 = this.add.text(1225, 95, "", {});
		pagenum5.text = "Page\n4 of 29";
		pagenum5.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page5.add(pagenum5);

		// stampnum5
		const stampnum5 = this.add.text(880, 120, "", {});
		stampnum5.text = "24/24";
		stampnum5.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page5.add(stampnum5);

		// stampcategory5
		const stampcategory5 = this.add.text(885, 87, "", {});
		stampcategory5.text = "Party:";
		stampcategory5.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page5.add(stampcategory5);

		// pagename5
		const pagename5 = this.add.text(329, 74, "", {});
		pagename5.text = "Party\n";
		pagename5.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page5.add(pagename5);

		// pageicon5
		const pageicon5 = this.add.image(255, 120, "stampbook", "categories/23");
		page5.add(pageicon5);

		// page4
		const page4 = this.add.container(0, 0);
		page4.visible = false;

		// pagebg4
		const pagebg4 = this.add.image(744, 862, "stampbook", "pagebgs/mascots");
		pagebg4.setOrigin(0.5, 1);
		page4.add(pagebg4);

		// pagenum4
		const pagenum4 = this.add.text(1225, 95, "", {});
		pagenum4.text = "Page\n3 of 29";
		pagenum4.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page4.add(pagenum4);

		// stampnum4
		const stampnum4 = this.add.text(880, 120, "", {});
		stampnum4.text = "12/12";
		stampnum4.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page4.add(stampnum4);

		// stampcategory4
		const stampcategory4 = this.add.text(885, 87, "", {});
		stampcategory4.text = "Characters:";
		stampcategory4.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page4.add(stampcategory4);

		// pagename4
		const pagename4 = this.add.text(329, 74, "", {});
		pagename4.text = "Characters";
		pagename4.setStyle({ "color": "#585858ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page4.add(pagename4);

		// pageicon4
		const pageicon4 = this.add.image(255, 120, "stampbook", "categories/6");
		page4.add(pageicon4);

		// page3
		const page3 = this.add.container(0, 0);
		page3.visible = false;

		// pagebg3
		const pagebg3 = this.add.image(744, 863, "stampbook", "pagebgs/entertainment");
		pagebg3.setOrigin(0.5, 1);
		page3.add(pagebg3);

		// pagenum3
		const pagenum3 = this.add.text(1225, 95, "", {});
		pagenum3.text = "Page\n2 of 29";
		pagenum3.setStyle({ "color": "#585858ff", "fixedWidth":150,"fontFamily": "Burbank Small", "fontSize": "25px" });
		page3.add(pagenum3);

		// stampnum3
		const stampnum3 = this.add.text(880, 120, "", {});
		stampnum3.text = "888/888";
		stampnum3.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page3.add(stampnum3);

		// stampcategory3
		const stampcategory3 = this.add.text(885, 87, "", {});
		stampcategory3.text = "Events Stamps:";
		stampcategory3.setStyle({ "align": "right", "color": "#585858ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page3.add(stampcategory3);

		// pagename3
		const pagename3 = this.add.text(329, 74, "", {});
		pagename3.text = "Events";
		pagename3.setStyle({ "color": "#585858ff", "fixedWidth":400,"fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page3.add(pagename3);

		// pageicon3
		const pageicon3 = this.add.image(255, 120, "stampbook", "categories/5");
		page3.add(pageicon3);

		// partyText
		const partyText = this.add.text(698, 224, "", {});
		partyText.text = "Party";
		partyText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page3.add(partyText);

		// partyIcon
		const partyIcon = this.add.image(650, 240, "stampbook", "categories/23");
		partyIcon.scaleX = 0.7;
		partyIcon.scaleY = 0.7;
		page3.add(partyIcon);

		// partyBtn
		const partyBtn = this.add.rectangle(750, 240, 300, 100);
		partyBtn.fillColor = 3729407;
		partyBtn.fillAlpha = 0.5;
		page3.add(partyBtn);

		// mascotText
		const mascotText = this.add.text(293, 224, "", {});
		mascotText.text = "Characters";
		mascotText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page3.add(mascotText);

		// mascotIcon
		const mascotIcon = this.add.image(245, 240, "stampbook", "categories/6");
		mascotIcon.scaleX = 0.7;
		mascotIcon.scaleY = 0.7;
		page3.add(mascotIcon);

		// mascotBtn
		const mascotBtn = this.add.rectangle(351, 240, 300, 100);
		mascotBtn.fillColor = 3729407;
		mascotBtn.fillAlpha = 0.5;
		page3.add(mascotBtn);

		// page2
		const page2 = this.add.container(0, 0);
		page2.visible = false;

		// pagebgs_contents
		const pagebgs_contents = this.add.image(744, 705, "stampbook", "pagebgs/contents");
		page2.add(pagebgs_contents);

		// pagenum
		const pagenum = this.add.text(1225, 95, "", {});
		pagenum.text = "Page\n1 of 29";
		pagenum.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
		page2.add(pagenum);

		// stampnum
		const stampnum = this.add.text(1039, 120, "", {});
		stampnum.text = "888/888";
		stampnum.setStyle({ "align": "right", "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "35px", "fontStyle": "bold" });
		page2.add(stampnum);

		// stampcategory
		const stampcategory = this.add.text(993, 87, "", {});
		stampcategory.text = "Total Stamps:";
		stampcategory.setStyle({ "align": "right", "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold" });
		page2.add(stampcategory);

		// pagename
		const pagename = this.add.text(199, 74, "", {});
		pagename.text = "Contents";
		pagename.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold" });
		page2.add(pagename);

		// eventsText
		const eventsText = this.add.text(293, 224, "", {});
		eventsText.text = "Events";
		eventsText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page2.add(eventsText);

		// eventsIcon
		const eventsIcon = this.add.image(245, 240, "stampbook", "categories/5");
		eventsIcon.scaleX = 0.7;
		eventsIcon.scaleY = 0.7;
		page2.add(eventsIcon);

		// eventsBtn
		const eventsBtn = this.add.rectangle(351, 240, 300, 100);
		eventsBtn.fillColor = 3729407;
		eventsBtn.fillAlpha = 0.5;
		page2.add(eventsBtn);

		// gamesText
		const gamesText = this.add.text(293, 329, "", {});
		gamesText.text = "Games";
		gamesText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page2.add(gamesText);

		// gamesIcon
		const gamesIcon = this.add.image(245, 345, "stampbook", "categories/8");
		gamesIcon.scaleX = 0.7;
		gamesIcon.scaleY = 0.7;
		page2.add(gamesIcon);

		// gamesBtn
		const gamesBtn = this.add.rectangle(351, 340, 300, 100);
		gamesBtn.fillColor = 3729407;
		gamesBtn.fillAlpha = 0.5;
		page2.add(gamesBtn);

		// activitiesText
		const activitiesText = this.add.text(698, 224, "", {});
		activitiesText.text = "Activities";
		activitiesText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page2.add(activitiesText);

		// activitiesIcon
		const activitiesIcon = this.add.image(650, 240, "stampbook", "categories/7");
		activitiesIcon.scaleX = 0.7;
		activitiesIcon.scaleY = 0.7;
		page2.add(activitiesIcon);

		// activitiesBtn
		const activitiesBtn = this.add.rectangle(750, 240, 300, 100);
		activitiesBtn.fillColor = 3729407;
		activitiesBtn.fillAlpha = 0.5;
		page2.add(activitiesBtn);

		// pinsText
		const pinsText = this.add.text(698, 329, "", {});
		pinsText.text = "Pins";
		pinsText.setStyle({ "color": "#5b5b5bff", "fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
		page2.add(pinsText);

		// pinsIcon
		const pinsIcon = this.add.image(650, 345, "stampbook", "categories/9001");
		pinsIcon.scaleX = 0.7;
		pinsIcon.scaleY = 0.7;
		page2.add(pinsIcon);

		// pinsBtn
		const pinsBtn = this.add.rectangle(750, 340, 300, 100);
		pinsBtn.fillColor = 3729407;
		pinsBtn.fillAlpha = 0.5;
		page2.add(pinsBtn);

		// page1
		const page1 = this.add.container(0, 0);
		page1.visible = false;

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

		// stampLayer
		const stampLayer = this.add.container(0, 0);

		// stampInfo
		const stampInfo = this.add.container(-190, 259);
		stampInfo.visible = false;

		// stampInfoBg
		const stampInfoBg = this.add.rectangle(6.518512446268176, -118.87806837021839, 300, 300);
		stampInfoBg.isFilled = true;
		stampInfo.add(stampInfoBg);

		// stampInfoTitle
		const stampInfoTitle = this.add.text(7, -175, "", {});
		stampInfoTitle.setOrigin(0.5, 0.5);
		stampInfoTitle.text = "Full House";
		stampInfoTitle.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "26px", "fontStyle": "bold" });
		stampInfo.add(stampInfoTitle);

		// stampInfoBody
		const stampInfoBody = this.add.text(6.518512446268176, -93.87806837021839, "", {});
		stampInfoBody.setOrigin(0.5, 0.5);
		stampInfoBody.text = "Get all ya mates together and play in a band innit";
		stampInfoBody.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "26px" });
		stampInfoBody.setWordWrapWidth(275);
		stampInfo.add(stampInfoBody);

		// stampHovers
		const stampHovers = this.add.container(260, 270);
		stampHovers.visible = false;

		// stampHover1
		const stampHover1 = this.add.rectangle(0, 0, 170, 150);
		stampHover1.fillColor = 47562;
		stampHover1.fillAlpha = 0.5;
		stampHovers.add(stampHover1);

		// stampHover2
		const stampHover2 = this.add.rectangle(170, 0, 170, 150);
		stampHover2.fillColor = 47562;
		stampHover2.fillAlpha = 0.5;
		stampHovers.add(stampHover2);

		// stampHover3
		const stampHover3 = this.add.rectangle(340, 0, 170, 150);
		stampHover3.fillColor = 47562;
		stampHover3.fillAlpha = 0.5;
		stampHovers.add(stampHover3);

		// stampHover4
		const stampHover4 = this.add.rectangle(510, 0, 170, 150);
		stampHover4.fillColor = 47562;
		stampHover4.fillAlpha = 0.5;
		stampHovers.add(stampHover4);

		// stampHover5
		const stampHover5 = this.add.rectangle(0, 150, 170, 150);
		stampHover5.fillColor = 47562;
		stampHover5.fillAlpha = 0.5;
		stampHovers.add(stampHover5);

		// stampHover6
		const stampHover6 = this.add.rectangle(170, 150, 170, 150);
		stampHover6.fillColor = 47562;
		stampHover6.fillAlpha = 0.5;
		stampHovers.add(stampHover6);

		// stampHover7
		const stampHover7 = this.add.rectangle(340, 150, 170, 150);
		stampHover7.fillColor = 47562;
		stampHover7.fillAlpha = 0.5;
		stampHovers.add(stampHover7);

		// stampHover8
		const stampHover8 = this.add.rectangle(510, 150, 170, 150);
		stampHover8.fillColor = 47562;
		stampHover8.fillAlpha = 0.5;
		stampHovers.add(stampHover8);

		// stampHover9
		const stampHover9 = this.add.rectangle(0, 300, 170, 150);
		stampHover9.fillColor = 47562;
		stampHover9.fillAlpha = 0.5;
		stampHovers.add(stampHover9);

		// stampHover10
		const stampHover10 = this.add.rectangle(170, 300, 170, 150);
		stampHover10.fillColor = 47562;
		stampHover10.fillAlpha = 0.5;
		stampHovers.add(stampHover10);

		// stampHover11
		const stampHover11 = this.add.rectangle(340, 300, 170, 150);
		stampHover11.fillColor = 47562;
		stampHover11.fillAlpha = 0.5;
		stampHovers.add(stampHover11);

		// stampHover12
		const stampHover12 = this.add.rectangle(510, 300, 170, 150);
		stampHover12.fillColor = 47562;
		stampHover12.fillAlpha = 0.5;
		stampHovers.add(stampHover12);

		// stampHover13
		const stampHover13 = this.add.rectangle(0, 450, 170, 150);
		stampHover13.fillColor = 47562;
		stampHover13.fillAlpha = 0.5;
		stampHovers.add(stampHover13);

		// stampHover14
		const stampHover14 = this.add.rectangle(170, 450, 170, 150);
		stampHover14.fillColor = 47562;
		stampHover14.fillAlpha = 0.5;
		stampHovers.add(stampHover14);

		// stampHover15
		const stampHover15 = this.add.rectangle(340, 450, 170, 150);
		stampHover15.fillColor = 47562;
		stampHover15.fillAlpha = 0.5;
		stampHovers.add(stampHover15);

		// stampHover16
		const stampHover16 = this.add.rectangle(510, 450, 170, 150);
		stampHover16.fillColor = 47562;
		stampHover16.fillAlpha = 0.5;
		stampHovers.add(stampHover16);

		// lists
		const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16, page17, page18, page19, page20, page21, page22, page23, page24, page25, page26, page27, page28, page29, page30, page31, page32, page33, page34, page35, page36, page37, page38];

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

		// aquaButton (components)
		const aquaButtonSimpleButton = new SimpleButton(aquaButton);
		aquaButtonSimpleButton.hoverCallback = () => this.btnOver(this.aquaText);
		aquaButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.aquaText);
		aquaButtonSimpleButton.callback = () => this.showPage(10);

		// astroButton (components)
		const astroButtonSimpleButton = new SimpleButton(astroButton);
		astroButtonSimpleButton.hoverCallback = () => this.btnOver(this.astroText);
		astroButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.astroText);
		astroButtonSimpleButton.callback = () => this.showPage(12);

		// jitsuButton (components)
		const jitsuButtonSimpleButton = new SimpleButton(jitsuButton);
		jitsuButtonSimpleButton.hoverCallback = () => this.btnOver(this.jitsuText);
		jitsuButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.jitsuText);
		jitsuButtonSimpleButton.callback = () => this.showPage(13);

		// fireJitsuButton (components)
		const fireJitsuButtonSimpleButton = new SimpleButton(fireJitsuButton);
		fireJitsuButtonSimpleButton.hoverCallback = () => this.btnOver(this.fireJitsuText);
		fireJitsuButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.fireJitsuText);
		fireJitsuButtonSimpleButton.callback = () => this.showPage(14);

		// snowJitsuButton (components)
		const snowJitsuButtonSimpleButton = new SimpleButton(snowJitsuButton);
		snowJitsuButtonSimpleButton.hoverCallback = () => this.btnOver(this.snowJitsuText);
		snowJitsuButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.snowJitsuText);
		snowJitsuButtonSimpleButton.callback = () => this.showPage(15);

		// waterJitsuButton (components)
		const waterJitsuButtonSimpleButton = new SimpleButton(waterJitsuButton);
		waterJitsuButtonSimpleButton.hoverCallback = () => this.btnOver(this.waterJitsuText);
		waterJitsuButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.waterJitsuText);
		waterJitsuButtonSimpleButton.callback = () => this.showPage(17);

		// cartSurferButton (components)
		const cartSurferButtonSimpleButton = new SimpleButton(cartSurferButton);
		cartSurferButtonSimpleButton.hoverCallback = () => this.btnOver(this.cartSurferText);
		cartSurferButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.cartSurferText);
		cartSurferButtonSimpleButton.callback = () => this.showPage(18);

		// wavesButton (components)
		const wavesButtonSimpleButton = new SimpleButton(wavesButton);
		wavesButtonSimpleButton.hoverCallback = () => this.btnOver(this.wavesText);
		wavesButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.wavesText);
		wavesButtonSimpleButton.callback = () => this.showPage(19);

		// fishingButton (components)
		const fishingButtonSimpleButton = new SimpleButton(fishingButton);
		fishingButtonSimpleButton.hoverCallback = () => this.btnOver(this.fishingText);
		fishingButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.fishingText);
		fishingButtonSimpleButton.callback = () => this.showPage(21);

		// jPAButton (components)
		const jPAButtonSimpleButton = new SimpleButton(jPAButton);
		jPAButtonSimpleButton.hoverCallback = () => this.btnOver(this.jPAText);
		jPAButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.jPAText);
		jPAButtonSimpleButton.callback = () => this.showPage(22);

		// missionsButton (components)
		const missionsButtonSimpleButton = new SimpleButton(missionsButton);
		missionsButtonSimpleButton.hoverCallback = () => this.btnOver(this.missionsText);
		missionsButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.missionsText);
		missionsButtonSimpleButton.callback = () => this.showPage(24);

		// pizzatronButton (components)
		const pizzatronButtonSimpleButton = new SimpleButton(pizzatronButton);
		pizzatronButtonSimpleButton.hoverCallback = () => this.btnOver(this.pizzatronText);
		pizzatronButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.pizzatronText);
		pizzatronButtonSimpleButton.callback = () => this.showPage(26);

		// launchButton (components)
		const launchButtonSimpleButton = new SimpleButton(launchButton);
		launchButtonSimpleButton.hoverCallback = () => this.btnOver(this.launchText);
		launchButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.launchText);
		launchButtonSimpleButton.callback = () => this.showPage(27);

		// rescueButton (components)
		const rescueButtonSimpleButton = new SimpleButton(rescueButton);
		rescueButtonSimpleButton.hoverCallback = () => this.btnOver(this.rescueText);
		rescueButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.rescueText);
		rescueButtonSimpleButton.callback = () => this.showPage(28);

		// pufflescapeButton (components)
		const pufflescapeButtonSimpleButton = new SimpleButton(pufflescapeButton);
		pufflescapeButtonSimpleButton.hoverCallback = () => this.btnOver(this.pufflescapeText);
		pufflescapeButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.pufflescapeText);
		pufflescapeButtonSimpleButton.callback = () => this.showPage(30);

		// smoothieButton (components)
		const smoothieButtonSimpleButton = new SimpleButton(smoothieButton);
		smoothieButtonSimpleButton.hoverCallback = () => this.btnOver(this.smoothieText);
		smoothieButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.smoothieText);
		smoothieButtonSimpleButton.callback = () => this.showPage(31);

		// sysDefButton (components)
		const sysDefButtonSimpleButton = new SimpleButton(sysDefButton);
		sysDefButtonSimpleButton.hoverCallback = () => this.btnOver(this.sysDefText);
		sysDefButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.sysDefText);
		sysDefButtonSimpleButton.callback = () => this.showPage(32);

		// thinIceButton (components)
		const thinIceButtonSimpleButton = new SimpleButton(thinIceButton);
		thinIceButtonSimpleButton.hoverCallback = () => this.btnOver(this.thinIceText);
		thinIceButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.thinIceText);
		thinIceButtonSimpleButton.callback = () => this.showPage(33);

		// huntButton (components)
		const huntButtonSimpleButton = new SimpleButton(huntButton);
		huntButtonSimpleButton.hoverCallback = () => this.btnOver(this.huntText);
		huntButtonSimpleButton.hoverOutCallback = () => this.btnOut(this.huntText);
		huntButtonSimpleButton.callback = () => this.showPage(34);

		// partyBtn (components)
		const partyBtnSimpleButton = new SimpleButton(partyBtn);
		partyBtnSimpleButton.hoverCallback = () => this.btnOver(this.partyText);
		partyBtnSimpleButton.hoverOutCallback = () => this.btnOut(this.partyText);
		partyBtnSimpleButton.callback = () => this.showPage(4);

		// mascotBtn (components)
		const mascotBtnSimpleButton = new SimpleButton(mascotBtn);
		mascotBtnSimpleButton.hoverCallback = () => this.btnOver(this.mascotText);
		mascotBtnSimpleButton.hoverOutCallback = () => this.btnOut(this.mascotText);
		mascotBtnSimpleButton.callback = () => this.showPage(3);

		// eventsBtn (components)
		const eventsBtnSimpleButton = new SimpleButton(eventsBtn);
		eventsBtnSimpleButton.hoverCallback = () => this.btnOver(this.eventsText);
		eventsBtnSimpleButton.hoverOutCallback = () => this.btnOut(this.eventsText);
		eventsBtnSimpleButton.callback = () => this.showPage(2);

		// gamesBtn (components)
		const gamesBtnSimpleButton = new SimpleButton(gamesBtn);
		gamesBtnSimpleButton.hoverCallback = () => this.btnOver(this.gamesText);
		gamesBtnSimpleButton.hoverOutCallback = () => this.btnOut(this.gamesText);
		gamesBtnSimpleButton.callback = () => this.showPage(9);

		// activitiesBtn (components)
		const activitiesBtnSimpleButton = new SimpleButton(activitiesBtn);
		activitiesBtnSimpleButton.hoverCallback = () => this.btnOver(this.activitiesText);
		activitiesBtnSimpleButton.hoverOutCallback = () => this.btnOut(this.activitiesText);
		activitiesBtnSimpleButton.callback = () => this.showPage(6);

		// pinsBtn (components)
		const pinsBtnSimpleButton = new SimpleButton(pinsBtn);
		pinsBtnSimpleButton.hoverCallback = () => this.btnOver(this.pinsText);
		pinsBtnSimpleButton.hoverOutCallback = () => this.btnOut(this.pinsText);
		pinsBtnSimpleButton.callback = () => this.showPage(35);

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

		// stampInfoBg (components)
		const stampInfoBgNineSlice = new NineSlice(stampInfoBg);
		stampInfoBgNineSlice.texture = {"key":"main","frame":"list/small"};

		// stampHover1 (components)
		const stampHover1SimpleButton = new SimpleButton(stampHover1);
		stampHover1SimpleButton.hoverCallback = () => this.onStampOver(0);
		stampHover1SimpleButton.hoverOutCallback = () => this.onStampOut(0);

		// stampHover2 (components)
		const stampHover2SimpleButton = new SimpleButton(stampHover2);
		stampHover2SimpleButton.hoverCallback = () => this.onStampOver(1);
		stampHover2SimpleButton.hoverOutCallback = () => this.onStampOut(1);

		// stampHover3 (components)
		const stampHover3SimpleButton = new SimpleButton(stampHover3);
		stampHover3SimpleButton.hoverCallback = () => this.onStampOver(2);
		stampHover3SimpleButton.hoverOutCallback = () => this.onStampOut(2);

		// stampHover4 (components)
		const stampHover4SimpleButton = new SimpleButton(stampHover4);
		stampHover4SimpleButton.hoverCallback = () => this.onStampOver(3);
		stampHover4SimpleButton.hoverOutCallback = () => this.onStampOut(3);

		// stampHover5 (components)
		const stampHover5SimpleButton = new SimpleButton(stampHover5);
		stampHover5SimpleButton.hoverCallback = () => this.onStampOver(4);
		stampHover5SimpleButton.hoverOutCallback = () => this.onStampOut(4);

		// stampHover6 (components)
		const stampHover6SimpleButton = new SimpleButton(stampHover6);
		stampHover6SimpleButton.hoverCallback = () => this.onStampOver(5);
		stampHover6SimpleButton.hoverOutCallback = () => this.onStampOut(5);

		// stampHover7 (components)
		const stampHover7SimpleButton = new SimpleButton(stampHover7);
		stampHover7SimpleButton.hoverCallback = () => this.onStampOver(6);
		stampHover7SimpleButton.hoverOutCallback = () => this.onStampOut(6);

		// stampHover8 (components)
		const stampHover8SimpleButton = new SimpleButton(stampHover8);
		stampHover8SimpleButton.hoverCallback = () => this.onStampOver(7);
		stampHover8SimpleButton.hoverOutCallback = () => this.onStampOut(7);

		// stampHover9 (components)
		const stampHover9SimpleButton = new SimpleButton(stampHover9);
		stampHover9SimpleButton.hoverCallback = () => this.onStampOver(8);
		stampHover9SimpleButton.hoverOutCallback = () => this.onStampOut(8);

		// stampHover10 (components)
		const stampHover10SimpleButton = new SimpleButton(stampHover10);
		stampHover10SimpleButton.hoverCallback = () => this.onStampOver(9);
		stampHover10SimpleButton.hoverOutCallback = () => this.onStampOut(9);

		// stampHover11 (components)
		const stampHover11SimpleButton = new SimpleButton(stampHover11);
		stampHover11SimpleButton.hoverCallback = () => this.onStampOver(10);
		stampHover11SimpleButton.hoverOutCallback = () => this.onStampOut(10);

		// stampHover12 (components)
		const stampHover12SimpleButton = new SimpleButton(stampHover12);
		stampHover12SimpleButton.hoverCallback = () => this.onStampOver(11);
		stampHover12SimpleButton.hoverOutCallback = () => this.onStampOut(11);

		// stampHover13 (components)
		const stampHover13SimpleButton = new SimpleButton(stampHover13);
		stampHover13SimpleButton.hoverCallback = () => this.onStampOver(12);
		stampHover13SimpleButton.hoverOutCallback = () => this.onStampOut(12);

		// stampHover14 (components)
		const stampHover14SimpleButton = new SimpleButton(stampHover14);
		stampHover14SimpleButton.hoverCallback = () => this.onStampOver(13);
		stampHover14SimpleButton.hoverOutCallback = () => this.onStampOut(13);

		// stampHover15 (components)
		const stampHover15SimpleButton = new SimpleButton(stampHover15);
		stampHover15SimpleButton.hoverCallback = () => this.onStampOver(14);
		stampHover15SimpleButton.hoverOutCallback = () => this.onStampOut(14);

		// stampHover16 (components)
		const stampHover16SimpleButton = new SimpleButton(stampHover16);
		stampHover16SimpleButton.hoverCallback = () => this.onStampOver(15);
		stampHover16SimpleButton.hoverOutCallback = () => this.onStampOut(15);

		this.blocker = blocker;
		this.editor_background = editor_background;
		this.buttons = buttons;
		this.bg = bg;
		this.close = close;
		this.page_back = page_back;
		this.page_forward = page_forward;
		this.dividers = dividers;
		this.page38 = page38;
		this.creditsbody = creditsbody;
		this.pagenum38 = pagenum38;
		this.pagename38 = pagename38;
		this.communitythanks = communitythanks;
		this.page37 = page37;
		this.pagenum37 = pagenum37;
		this.pagename37 = pagename37;
		this.statistics = statistics;
		this.page36 = page36;
		this.pagenum36 = pagenum36;
		this.stampnum36 = stampnum36;
		this.stampcategory36 = stampcategory36;
		this.pagename36 = pagename36;
		this.pageicon36 = pageicon36;
		this.page35 = page35;
		this.pagenum35 = pagenum35;
		this.stampnum35 = stampnum35;
		this.stampcategory35 = stampcategory35;
		this.pagename35 = pagename35;
		this.pageicon35 = pageicon35;
		this.page34 = page34;
		this.pagenum34 = pagenum34;
		this.stampnum34 = stampnum34;
		this.stampcategory34 = stampcategory34;
		this.pagename34 = pagename34;
		this.pageicon34 = pageicon34;
		this.page33 = page33;
		this.pagenum33 = pagenum33;
		this.stampnum33 = stampnum33;
		this.stampcategory33 = stampcategory33;
		this.pagename33 = pagename33;
		this.pageicon33 = pageicon33;
		this.page32 = page32;
		this.pagenum32 = pagenum32;
		this.stampnum32 = stampnum32;
		this.stampcategory32 = stampcategory32;
		this.pagename32 = pagename32;
		this.pageicon32 = pageicon32;
		this.page31 = page31;
		this.pagenum31 = pagenum31;
		this.stampnum31 = stampnum31;
		this.stampcategory31 = stampcategory31;
		this.pagename31 = pagename31;
		this.pageicon31 = pageicon31;
		this.page30 = page30;
		this.pagenum30 = pagenum30;
		this.stampnum30 = stampnum30;
		this.stampcategory30 = stampcategory30;
		this.pagename30 = pagename30;
		this.pageicon30 = pageicon30;
		this.page29 = page29;
		this.pagenum29 = pagenum29;
		this.stampnum29 = stampnum29;
		this.stampcategory29 = stampcategory29;
		this.pagename29 = pagename29;
		this.pageicon29 = pageicon29;
		this.page28 = page28;
		this.pagenum28 = pagenum28;
		this.stampnum28 = stampnum28;
		this.stampcategory28 = stampcategory28;
		this.pagename28 = pagename28;
		this.pageicon28 = pageicon28;
		this.page27 = page27;
		this.pagenum27 = pagenum27;
		this.stampnum27 = stampnum27;
		this.stampcategory27 = stampcategory27;
		this.pagename27 = pagename27;
		this.pageicon27 = pageicon27;
		this.page26 = page26;
		this.pagenum26 = pagenum26;
		this.stampnum26 = stampnum26;
		this.stampcategory26 = stampcategory26;
		this.pagename26 = pagename26;
		this.pageicon26 = pageicon26;
		this.page25 = page25;
		this.pagenum25 = pagenum25;
		this.stampnum25 = stampnum25;
		this.stampcategory25 = stampcategory25;
		this.pagename25 = pagename25;
		this.pageicon25 = pageicon25;
		this.page24 = page24;
		this.pagenum24 = pagenum24;
		this.stampnum24 = stampnum24;
		this.stampcategory24 = stampcategory24;
		this.pagename24 = pagename24;
		this.pageicon24 = pageicon24;
		this.page23 = page23;
		this.pagenum23 = pagenum23;
		this.stampnum23 = stampnum23;
		this.stampcategory23 = stampcategory23;
		this.pagename23 = pagename23;
		this.pageicon23 = pageicon23;
		this.page22 = page22;
		this.pagenum22 = pagenum22;
		this.stampnum22 = stampnum22;
		this.stampcategory22 = stampcategory22;
		this.pagename22 = pagename22;
		this.pageicon22 = pageicon22;
		this.page21 = page21;
		this.pagenum21 = pagenum21;
		this.stampnum21 = stampnum21;
		this.stampcategory21 = stampcategory21;
		this.pagename21 = pagename21;
		this.pageicon21 = pageicon21;
		this.page20 = page20;
		this.pagenum20 = pagenum20;
		this.stampnum20 = stampnum20;
		this.stampcategory20 = stampcategory20;
		this.pagename20 = pagename20;
		this.pageicon20 = pageicon20;
		this.page19 = page19;
		this.pagenum19 = pagenum19;
		this.stampnum19 = stampnum19;
		this.stampcategory19 = stampcategory19;
		this.pagename19 = pagename19;
		this.pageicon19 = pageicon19;
		this.page18 = page18;
		this.pagenum18 = pagenum18;
		this.stampnum18 = stampnum18;
		this.stampcategory18 = stampcategory18;
		this.pagename18 = pagename18;
		this.pageicon18 = pageicon18;
		this.page17 = page17;
		this.pagenum17 = pagenum17;
		this.stampnum17 = stampnum17;
		this.stampcategory17 = stampcategory17;
		this.pagename17 = pagename17;
		this.pageicon17 = pageicon17;
		this.page16 = page16;
		this.pagenum16 = pagenum16;
		this.stampnum16 = stampnum16;
		this.stampcategory16 = stampcategory16;
		this.pagename16 = pagename16;
		this.pageicon16 = pageicon16;
		this.page15 = page15;
		this.pagenum15 = pagenum15;
		this.stampnum15 = stampnum15;
		this.stampcategory15 = stampcategory15;
		this.pagename15 = pagename15;
		this.pageicon15 = pageicon15;
		this.page14 = page14;
		this.pagenum14 = pagenum14;
		this.stampnum14 = stampnum14;
		this.stampcategory14 = stampcategory14;
		this.pagename14 = pagename14;
		this.pageicon14 = pageicon14;
		this.page13 = page13;
		this.pagenum13 = pagenum13;
		this.stampnum13 = stampnum13;
		this.stampcategory13 = stampcategory13;
		this.pagename13 = pagename13;
		this.pageicon13 = pageicon13;
		this.page12 = page12;
		this.pagenum12 = pagenum12;
		this.stampnum12 = stampnum12;
		this.stampcategory12 = stampcategory12;
		this.pagename12 = pagename12;
		this.pageicon12 = pageicon12;
		this.page11 = page11;
		this.pagenum11 = pagenum11;
		this.stampnum11 = stampnum11;
		this.stampcategory11 = stampcategory11;
		this.pagename11 = pagename11;
		this.pageicon11 = pageicon11;
		this.page10 = page10;
		this.pagenum10 = pagenum10;
		this.stampnum10 = stampnum10;
		this.stampcategory10 = stampcategory10;
		this.pagename10 = pagename10;
		this.pageicon10 = pageicon10;
		this.aquaText = aquaText;
		this.aquaIcon = aquaIcon;
		this.astroText = astroText;
		this.astroIcon = astroIcon;
		this.jitsuText = jitsuText;
		this.jitsuIcon = jitsuIcon;
		this.fireJitsuText = fireJitsuText;
		this.fireJitsuIcon = fireJitsuIcon;
		this.snowJitsuText = snowJitsuText;
		this.snowJitsuIcon = snowJitsuIcon;
		this.waterJitsuText = waterJitsuText;
		this.waterJistuIcon = waterJistuIcon;
		this.cartSurferText = cartSurferText;
		this.cartSurferIcon = cartSurferIcon;
		this.wavesText = wavesText;
		this.wavesIcon = wavesIcon;
		this.fishingText = fishingText;
		this.fishingIcon = fishingIcon;
		this.jPAText = jPAText;
		this.jPAIcon = jPAIcon;
		this.missionsText = missionsText;
		this.missionsIcon = missionsIcon;
		this.pizzatronText = pizzatronText;
		this.pizzatronIcon = pizzatronIcon;
		this.launchText = launchText;
		this.launchIcon = launchIcon;
		this.rescueText = rescueText;
		this.rescueIcon = rescueIcon;
		this.pufflescapeText = pufflescapeText;
		this.pufflescapeIcon = pufflescapeIcon;
		this.smoothieText = smoothieText;
		this.smoothieIcon = smoothieIcon;
		this.sysDefText = sysDefText;
		this.sysDefIcon = sysDefIcon;
		this.thinIceText = thinIceText;
		this.thinIceIcon = thinIceIcon;
		this.huntText = huntText;
		this.huntIcon = huntIcon;
		this.page9 = page9;
		this.pagenum9 = pagenum9;
		this.stampnum9 = stampnum9;
		this.stampcategory9 = stampcategory9;
		this.pagename9 = pagename9;
		this.pageicon9 = pageicon9;
		this.page8 = page8;
		this.pagenum8 = pagenum8;
		this.stampnum8 = stampnum8;
		this.stampcategory8 = stampcategory8;
		this.pagename8 = pagename8;
		this.pageicon8 = pageicon8;
		this.page7 = page7;
		this.pagenum7 = pagenum7;
		this.stampnum7 = stampnum7;
		this.stampcategory7 = stampcategory7;
		this.pagename7 = pagename7;
		this.pageicon7 = pageicon7;
		this.page6 = page6;
		this.pagenum6 = pagenum6;
		this.stampnum6 = stampnum6;
		this.stampcategory6 = stampcategory6;
		this.pagename6 = pagename6;
		this.pageicon6 = pageicon6;
		this.page5 = page5;
		this.pagenum5 = pagenum5;
		this.stampnum5 = stampnum5;
		this.stampcategory5 = stampcategory5;
		this.pagename5 = pagename5;
		this.pageicon5 = pageicon5;
		this.page4 = page4;
		this.pagenum4 = pagenum4;
		this.stampnum4 = stampnum4;
		this.stampcategory4 = stampcategory4;
		this.pagename4 = pagename4;
		this.pageicon4 = pageicon4;
		this.page3 = page3;
		this.pagenum3 = pagenum3;
		this.stampnum3 = stampnum3;
		this.stampcategory3 = stampcategory3;
		this.pagename3 = pagename3;
		this.pageicon3 = pageicon3;
		this.partyText = partyText;
		this.partyIcon = partyIcon;
		this.mascotText = mascotText;
		this.mascotIcon = mascotIcon;
		this.page2 = page2;
		this.pagebgs_contents = pagebgs_contents;
		this.pagenum = pagenum;
		this.stampnum = stampnum;
		this.stampcategory = stampcategory;
		this.pagename = pagename;
		this.eventsText = eventsText;
		this.eventsIcon = eventsIcon;
		this.gamesText = gamesText;
		this.gamesIcon = gamesIcon;
		this.activitiesText = activitiesText;
		this.activitiesIcon = activitiesIcon;
		this.pinsText = pinsText;
		this.pinsIcon = pinsIcon;
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
		this.stampLayer = stampLayer;
		this.stampInfo = stampInfo;
		this.stampInfoBg = stampInfoBg;
		this.stampInfoTitle = stampInfoTitle;
		this.stampInfoBody = stampInfoBody;
		this.stampHovers = stampHovers;
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
	/** @type {Phaser.GameObjects.Container} */
	page38;
	/** @type {Phaser.GameObjects.Text} */
	creditsbody;
	/** @type {Phaser.GameObjects.Text} */
	pagenum38;
	/** @type {Phaser.GameObjects.Text} */
	pagename38;
	/** @type {Phaser.GameObjects.Text} */
	communitythanks;
	/** @type {Phaser.GameObjects.Container} */
	page37;
	/** @type {Phaser.GameObjects.Text} */
	pagenum37;
	/** @type {Phaser.GameObjects.Text} */
	pagename37;
	/** @type {Phaser.GameObjects.Text} */
	statistics;
	/** @type {Phaser.GameObjects.Container} */
	page36;
	/** @type {Phaser.GameObjects.Text} */
	pagenum36;
	/** @type {Phaser.GameObjects.Text} */
	stampnum36;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory36;
	/** @type {Phaser.GameObjects.Text} */
	pagename36;
	/** @type {Phaser.GameObjects.Image} */
	pageicon36;
	/** @type {Phaser.GameObjects.Container} */
	page35;
	/** @type {Phaser.GameObjects.Text} */
	pagenum35;
	/** @type {Phaser.GameObjects.Text} */
	stampnum35;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory35;
	/** @type {Phaser.GameObjects.Text} */
	pagename35;
	/** @type {Phaser.GameObjects.Image} */
	pageicon35;
	/** @type {Phaser.GameObjects.Container} */
	page34;
	/** @type {Phaser.GameObjects.Text} */
	pagenum34;
	/** @type {Phaser.GameObjects.Text} */
	stampnum34;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory34;
	/** @type {Phaser.GameObjects.Text} */
	pagename34;
	/** @type {Phaser.GameObjects.Image} */
	pageicon34;
	/** @type {Phaser.GameObjects.Container} */
	page33;
	/** @type {Phaser.GameObjects.Text} */
	pagenum33;
	/** @type {Phaser.GameObjects.Text} */
	stampnum33;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory33;
	/** @type {Phaser.GameObjects.Text} */
	pagename33;
	/** @type {Phaser.GameObjects.Image} */
	pageicon33;
	/** @type {Phaser.GameObjects.Container} */
	page32;
	/** @type {Phaser.GameObjects.Text} */
	pagenum32;
	/** @type {Phaser.GameObjects.Text} */
	stampnum32;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory32;
	/** @type {Phaser.GameObjects.Text} */
	pagename32;
	/** @type {Phaser.GameObjects.Image} */
	pageicon32;
	/** @type {Phaser.GameObjects.Container} */
	page31;
	/** @type {Phaser.GameObjects.Text} */
	pagenum31;
	/** @type {Phaser.GameObjects.Text} */
	stampnum31;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory31;
	/** @type {Phaser.GameObjects.Text} */
	pagename31;
	/** @type {Phaser.GameObjects.Image} */
	pageicon31;
	/** @type {Phaser.GameObjects.Container} */
	page30;
	/** @type {Phaser.GameObjects.Text} */
	pagenum30;
	/** @type {Phaser.GameObjects.Text} */
	stampnum30;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory30;
	/** @type {Phaser.GameObjects.Text} */
	pagename30;
	/** @type {Phaser.GameObjects.Image} */
	pageicon30;
	/** @type {Phaser.GameObjects.Container} */
	page29;
	/** @type {Phaser.GameObjects.Text} */
	pagenum29;
	/** @type {Phaser.GameObjects.Text} */
	stampnum29;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory29;
	/** @type {Phaser.GameObjects.Text} */
	pagename29;
	/** @type {Phaser.GameObjects.Image} */
	pageicon29;
	/** @type {Phaser.GameObjects.Container} */
	page28;
	/** @type {Phaser.GameObjects.Text} */
	pagenum28;
	/** @type {Phaser.GameObjects.Text} */
	stampnum28;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory28;
	/** @type {Phaser.GameObjects.Text} */
	pagename28;
	/** @type {Phaser.GameObjects.Image} */
	pageicon28;
	/** @type {Phaser.GameObjects.Container} */
	page27;
	/** @type {Phaser.GameObjects.Text} */
	pagenum27;
	/** @type {Phaser.GameObjects.Text} */
	stampnum27;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory27;
	/** @type {Phaser.GameObjects.Text} */
	pagename27;
	/** @type {Phaser.GameObjects.Image} */
	pageicon27;
	/** @type {Phaser.GameObjects.Container} */
	page26;
	/** @type {Phaser.GameObjects.Text} */
	pagenum26;
	/** @type {Phaser.GameObjects.Text} */
	stampnum26;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory26;
	/** @type {Phaser.GameObjects.Text} */
	pagename26;
	/** @type {Phaser.GameObjects.Image} */
	pageicon26;
	/** @type {Phaser.GameObjects.Container} */
	page25;
	/** @type {Phaser.GameObjects.Text} */
	pagenum25;
	/** @type {Phaser.GameObjects.Text} */
	stampnum25;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory25;
	/** @type {Phaser.GameObjects.Text} */
	pagename25;
	/** @type {Phaser.GameObjects.Image} */
	pageicon25;
	/** @type {Phaser.GameObjects.Container} */
	page24;
	/** @type {Phaser.GameObjects.Text} */
	pagenum24;
	/** @type {Phaser.GameObjects.Text} */
	stampnum24;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory24;
	/** @type {Phaser.GameObjects.Text} */
	pagename24;
	/** @type {Phaser.GameObjects.Image} */
	pageicon24;
	/** @type {Phaser.GameObjects.Container} */
	page23;
	/** @type {Phaser.GameObjects.Text} */
	pagenum23;
	/** @type {Phaser.GameObjects.Text} */
	stampnum23;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory23;
	/** @type {Phaser.GameObjects.Text} */
	pagename23;
	/** @type {Phaser.GameObjects.Image} */
	pageicon23;
	/** @type {Phaser.GameObjects.Container} */
	page22;
	/** @type {Phaser.GameObjects.Text} */
	pagenum22;
	/** @type {Phaser.GameObjects.Text} */
	stampnum22;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory22;
	/** @type {Phaser.GameObjects.Text} */
	pagename22;
	/** @type {Phaser.GameObjects.Image} */
	pageicon22;
	/** @type {Phaser.GameObjects.Container} */
	page21;
	/** @type {Phaser.GameObjects.Text} */
	pagenum21;
	/** @type {Phaser.GameObjects.Text} */
	stampnum21;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory21;
	/** @type {Phaser.GameObjects.Text} */
	pagename21;
	/** @type {Phaser.GameObjects.Image} */
	pageicon21;
	/** @type {Phaser.GameObjects.Container} */
	page20;
	/** @type {Phaser.GameObjects.Text} */
	pagenum20;
	/** @type {Phaser.GameObjects.Text} */
	stampnum20;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory20;
	/** @type {Phaser.GameObjects.Text} */
	pagename20;
	/** @type {Phaser.GameObjects.Image} */
	pageicon20;
	/** @type {Phaser.GameObjects.Container} */
	page19;
	/** @type {Phaser.GameObjects.Text} */
	pagenum19;
	/** @type {Phaser.GameObjects.Text} */
	stampnum19;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory19;
	/** @type {Phaser.GameObjects.Text} */
	pagename19;
	/** @type {Phaser.GameObjects.Image} */
	pageicon19;
	/** @type {Phaser.GameObjects.Container} */
	page18;
	/** @type {Phaser.GameObjects.Text} */
	pagenum18;
	/** @type {Phaser.GameObjects.Text} */
	stampnum18;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory18;
	/** @type {Phaser.GameObjects.Text} */
	pagename18;
	/** @type {Phaser.GameObjects.Image} */
	pageicon18;
	/** @type {Phaser.GameObjects.Container} */
	page17;
	/** @type {Phaser.GameObjects.Text} */
	pagenum17;
	/** @type {Phaser.GameObjects.Text} */
	stampnum17;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory17;
	/** @type {Phaser.GameObjects.Text} */
	pagename17;
	/** @type {Phaser.GameObjects.Image} */
	pageicon17;
	/** @type {Phaser.GameObjects.Container} */
	page16;
	/** @type {Phaser.GameObjects.Text} */
	pagenum16;
	/** @type {Phaser.GameObjects.Text} */
	stampnum16;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory16;
	/** @type {Phaser.GameObjects.Text} */
	pagename16;
	/** @type {Phaser.GameObjects.Image} */
	pageicon16;
	/** @type {Phaser.GameObjects.Container} */
	page15;
	/** @type {Phaser.GameObjects.Text} */
	pagenum15;
	/** @type {Phaser.GameObjects.Text} */
	stampnum15;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory15;
	/** @type {Phaser.GameObjects.Text} */
	pagename15;
	/** @type {Phaser.GameObjects.Image} */
	pageicon15;
	/** @type {Phaser.GameObjects.Container} */
	page14;
	/** @type {Phaser.GameObjects.Text} */
	pagenum14;
	/** @type {Phaser.GameObjects.Text} */
	stampnum14;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory14;
	/** @type {Phaser.GameObjects.Text} */
	pagename14;
	/** @type {Phaser.GameObjects.Image} */
	pageicon14;
	/** @type {Phaser.GameObjects.Container} */
	page13;
	/** @type {Phaser.GameObjects.Text} */
	pagenum13;
	/** @type {Phaser.GameObjects.Text} */
	stampnum13;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory13;
	/** @type {Phaser.GameObjects.Text} */
	pagename13;
	/** @type {Phaser.GameObjects.Image} */
	pageicon13;
	/** @type {Phaser.GameObjects.Container} */
	page12;
	/** @type {Phaser.GameObjects.Text} */
	pagenum12;
	/** @type {Phaser.GameObjects.Text} */
	stampnum12;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory12;
	/** @type {Phaser.GameObjects.Text} */
	pagename12;
	/** @type {Phaser.GameObjects.Image} */
	pageicon12;
	/** @type {Phaser.GameObjects.Container} */
	page11;
	/** @type {Phaser.GameObjects.Text} */
	pagenum11;
	/** @type {Phaser.GameObjects.Text} */
	stampnum11;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory11;
	/** @type {Phaser.GameObjects.Text} */
	pagename11;
	/** @type {Phaser.GameObjects.Image} */
	pageicon11;
	/** @type {Phaser.GameObjects.Container} */
	page10;
	/** @type {Phaser.GameObjects.Text} */
	pagenum10;
	/** @type {Phaser.GameObjects.Text} */
	stampnum10;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory10;
	/** @type {Phaser.GameObjects.Text} */
	pagename10;
	/** @type {Phaser.GameObjects.Image} */
	pageicon10;
	/** @type {Phaser.GameObjects.Text} */
	aquaText;
	/** @type {Phaser.GameObjects.Image} */
	aquaIcon;
	/** @type {Phaser.GameObjects.Text} */
	astroText;
	/** @type {Phaser.GameObjects.Image} */
	astroIcon;
	/** @type {Phaser.GameObjects.Text} */
	jitsuText;
	/** @type {Phaser.GameObjects.Image} */
	jitsuIcon;
	/** @type {Phaser.GameObjects.Text} */
	fireJitsuText;
	/** @type {Phaser.GameObjects.Image} */
	fireJitsuIcon;
	/** @type {Phaser.GameObjects.Text} */
	snowJitsuText;
	/** @type {Phaser.GameObjects.Image} */
	snowJitsuIcon;
	/** @type {Phaser.GameObjects.Text} */
	waterJitsuText;
	/** @type {Phaser.GameObjects.Image} */
	waterJistuIcon;
	/** @type {Phaser.GameObjects.Text} */
	cartSurferText;
	/** @type {Phaser.GameObjects.Image} */
	cartSurferIcon;
	/** @type {Phaser.GameObjects.Text} */
	wavesText;
	/** @type {Phaser.GameObjects.Image} */
	wavesIcon;
	/** @type {Phaser.GameObjects.Text} */
	fishingText;
	/** @type {Phaser.GameObjects.Image} */
	fishingIcon;
	/** @type {Phaser.GameObjects.Text} */
	jPAText;
	/** @type {Phaser.GameObjects.Image} */
	jPAIcon;
	/** @type {Phaser.GameObjects.Text} */
	missionsText;
	/** @type {Phaser.GameObjects.Image} */
	missionsIcon;
	/** @type {Phaser.GameObjects.Text} */
	pizzatronText;
	/** @type {Phaser.GameObjects.Image} */
	pizzatronIcon;
	/** @type {Phaser.GameObjects.Text} */
	launchText;
	/** @type {Phaser.GameObjects.Image} */
	launchIcon;
	/** @type {Phaser.GameObjects.Text} */
	rescueText;
	/** @type {Phaser.GameObjects.Image} */
	rescueIcon;
	/** @type {Phaser.GameObjects.Text} */
	pufflescapeText;
	/** @type {Phaser.GameObjects.Image} */
	pufflescapeIcon;
	/** @type {Phaser.GameObjects.Text} */
	smoothieText;
	/** @type {Phaser.GameObjects.Image} */
	smoothieIcon;
	/** @type {Phaser.GameObjects.Text} */
	sysDefText;
	/** @type {Phaser.GameObjects.Image} */
	sysDefIcon;
	/** @type {Phaser.GameObjects.Text} */
	thinIceText;
	/** @type {Phaser.GameObjects.Image} */
	thinIceIcon;
	/** @type {Phaser.GameObjects.Text} */
	huntText;
	/** @type {Phaser.GameObjects.Image} */
	huntIcon;
	/** @type {Phaser.GameObjects.Container} */
	page9;
	/** @type {Phaser.GameObjects.Text} */
	pagenum9;
	/** @type {Phaser.GameObjects.Text} */
	stampnum9;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory9;
	/** @type {Phaser.GameObjects.Text} */
	pagename9;
	/** @type {Phaser.GameObjects.Image} */
	pageicon9;
	/** @type {Phaser.GameObjects.Container} */
	page8;
	/** @type {Phaser.GameObjects.Text} */
	pagenum8;
	/** @type {Phaser.GameObjects.Text} */
	stampnum8;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory8;
	/** @type {Phaser.GameObjects.Text} */
	pagename8;
	/** @type {Phaser.GameObjects.Image} */
	pageicon8;
	/** @type {Phaser.GameObjects.Container} */
	page7;
	/** @type {Phaser.GameObjects.Text} */
	pagenum7;
	/** @type {Phaser.GameObjects.Text} */
	stampnum7;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory7;
	/** @type {Phaser.GameObjects.Text} */
	pagename7;
	/** @type {Phaser.GameObjects.Image} */
	pageicon7;
	/** @type {Phaser.GameObjects.Container} */
	page6;
	/** @type {Phaser.GameObjects.Text} */
	pagenum6;
	/** @type {Phaser.GameObjects.Text} */
	stampnum6;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory6;
	/** @type {Phaser.GameObjects.Text} */
	pagename6;
	/** @type {Phaser.GameObjects.Image} */
	pageicon6;
	/** @type {Phaser.GameObjects.Container} */
	page5;
	/** @type {Phaser.GameObjects.Text} */
	pagenum5;
	/** @type {Phaser.GameObjects.Text} */
	stampnum5;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory5;
	/** @type {Phaser.GameObjects.Text} */
	pagename5;
	/** @type {Phaser.GameObjects.Image} */
	pageicon5;
	/** @type {Phaser.GameObjects.Container} */
	page4;
	/** @type {Phaser.GameObjects.Text} */
	pagenum4;
	/** @type {Phaser.GameObjects.Text} */
	stampnum4;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory4;
	/** @type {Phaser.GameObjects.Text} */
	pagename4;
	/** @type {Phaser.GameObjects.Image} */
	pageicon4;
	/** @type {Phaser.GameObjects.Container} */
	page3;
	/** @type {Phaser.GameObjects.Text} */
	pagenum3;
	/** @type {Phaser.GameObjects.Text} */
	stampnum3;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory3;
	/** @type {Phaser.GameObjects.Text} */
	pagename3;
	/** @type {Phaser.GameObjects.Image} */
	pageicon3;
	/** @type {Phaser.GameObjects.Text} */
	partyText;
	/** @type {Phaser.GameObjects.Image} */
	partyIcon;
	/** @type {Phaser.GameObjects.Text} */
	mascotText;
	/** @type {Phaser.GameObjects.Image} */
	mascotIcon;
	/** @type {Phaser.GameObjects.Container} */
	page2;
	/** @type {Phaser.GameObjects.Image} */
	pagebgs_contents;
	/** @type {Phaser.GameObjects.Text} */
	pagenum;
	/** @type {Phaser.GameObjects.Text} */
	stampnum;
	/** @type {Phaser.GameObjects.Text} */
	stampcategory;
	/** @type {Phaser.GameObjects.Text} */
	pagename;
	/** @type {Phaser.GameObjects.Text} */
	eventsText;
	/** @type {Phaser.GameObjects.Image} */
	eventsIcon;
	/** @type {Phaser.GameObjects.Text} */
	gamesText;
	/** @type {Phaser.GameObjects.Image} */
	gamesIcon;
	/** @type {Phaser.GameObjects.Text} */
	activitiesText;
	/** @type {Phaser.GameObjects.Image} */
	activitiesIcon;
	/** @type {Phaser.GameObjects.Text} */
	pinsText;
	/** @type {Phaser.GameObjects.Image} */
	pinsIcon;
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
	/** @type {Phaser.GameObjects.Container} */
	stampLayer;
	/** @type {Phaser.GameObjects.Container} */
	stampInfo;
	/** @type {Phaser.GameObjects.Rectangle} */
	stampInfoBg;
	/** @type {Phaser.GameObjects.Text} */
	stampInfoTitle;
	/** @type {Phaser.GameObjects.Text} */
	stampInfoBody;
	/** @type {Phaser.GameObjects.Container} */
	stampHovers;
	/** @type {Phaser.GameObjects.Container[]} */
	pages;

	/* START-USER-CODE */

    // Write your code here


    create() {
        this.key = 'Stampbook'
		this.id = this.interface.stampbookId
        super.create();

		if (this.id === this.world.client.id) {
			this.initStampbook({}, true)
		}
		else{
			this.network.send('get_stampbook', { userId: this.id })
		}

        this.stamps = []

        this.pageStamps = [
            [], // Front
            [], // Index
            [], // Events
            [7, 8, 31, 32, 33, 34, 35, 36, 290, 358, 448, 466], // Characters
            [182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 292, 294, 296, 330, 332], // Party
            [360, 426, 438, 439, 440, 444], // Party
            [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], // Activities
            [25, 26, 27, 28, 29, 30, 197, 198, 199, 200, 201, 362, 364, 488, 489, 490], // Activities
            [491, 492, 493, 494, 495], // Activities
            [], // Games
            [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87], // Aqua Grabber
            [88, 89, 91, 92], // Aqua Grabber
            [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62], // Astro Barrier
            [230, 232, 234, 236, 238, 240, 242, 244, 246, 248], // Card-Jitsu
            [252, 254, 256, 260, 262, 264, 266, 268], // Card-Jitsu Fire
            [467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482], // Card-Jistu Snow
            [483, 484, 485, 486, 487], // Card-Jitsu Snow
            [270, 274, 276, 278, 282, 284, 286, 288], // Card-Jitsu Water
            [206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228], // Cart Surfer
            [93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], // Catchin' Waves
            [109, 110, 111, 112, 113, 114], // Catchin' Waves
            [372, 374, 376, 378, 380, 382, 384, 386, 388, 390], // Ice Fishing
            [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 202, 203,], // Jet Pack Adventure
            [204, 205], // Jet Pack Adventure
            [159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174], // Missions
            [175, 176, 177, 178, 179, 180], // Missions
            [392, 394, 396, 398, 400, 402, 404, 406, 408, 410], // Pizzatron 3000
            [334, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356], // Puffle Launch
            [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146], // Puffle Rescue
            [147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157], // Puffle Rescue
            [427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437], // Pufflescape
            [450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465], // Smoothie Smash
            [298, 300, 302, 304, 306, 308, 310, 312, 320, 322, 324, 326, 328, 443], // System Defender
            [63, 64, 65, 66, 67, 68, 69, 70, 71], // Thin Ice
            [414, 416, 418, 420, 428] // Treasure Hunt
        ]

		this.network.send('get_statistics')
		this.pinLoader = new PinLoader(this)

		this.pins = []
		this.pinsOnPage = []
    }

	initStampbook(args, isPlayer) {

		this.color = (isPlayer) ? this.world.client.stampbookColor : args.color
		this.clasp = (isPlayer) ? this.world.client.stampbookClasp : args.clasp
		this.pattern = (isPlayer) ? this.world.client.stampbookPattern : args.pattern

		this.changeClasp(this.clasp)
		this.changePattern(this.pattern)
		this.changeColor(this.color)
		
		this.stampsEarned = (isPlayer) ? this.world.client.stamps : args.stamps
		this.username.text = (isPlayer) ? this.world.client.penguin.username : args.username

		this.total.text = `Total Stamps ${this.stampsEarned.length}/${Object.keys(this.crumbs.stamps).length}`
		this.stampnum.text = `${this.stampsEarned.length}/${Object.keys(this.crumbs.stamps).length}`

		let mascotStamps = this.getCategoryStamps(6)
		this.stampnum4.text = `${mascotStamps[1]}/${mascotStamps[0]}`

		let partyStamps = this.getCategoryStamps(23)
		this.stampnum5.text = `${partyStamps[1]}/${partyStamps[0]}`
		this.stampnum6.text = `${partyStamps[1]}/${partyStamps[0]}`

		let activityStamps = this.getCategoryStamps(7)
		this.stampnum7.text = `${activityStamps[1]}/${activityStamps[0]}`
		this.stampnum8.text = `${activityStamps[1]}/${activityStamps[0]}`
		this.stampnum9.text = `${activityStamps[1]}/${activityStamps[0]}`

		// event stamps
		this.stampnum3.text = `${(mascotStamps[1] + partyStamps[1])}/${(mascotStamps[0] + partyStamps[0])}`

		let aquaGrabberStamps = this.getCategoryStamps(13)
		this.stampnum11.text = `${aquaGrabberStamps[1]}/${aquaGrabberStamps[0]}`
		this.stampnum12.text = `${aquaGrabberStamps[1]}/${aquaGrabberStamps[0]}`

		let astroBarrierStamps = this.getCategoryStamps(14)
		this.stampnum13.text = `${astroBarrierStamps[1]}/${astroBarrierStamps[0]}`

		let cardJitsuStamps = this.getCategoryStamps(38)
		this.stampnum14.text = `${cardJitsuStamps[1]}/${cardJitsuStamps[0]}`

		let cardJitsuFStamps = this.getCategoryStamps(32)
		this.stampnum15.text = `${cardJitsuFStamps[1]}/${cardJitsuFStamps[0]}`

		let cardJitsuSStamps = this.getCategoryStamps(60)
		this.stampnum16.text = `${cardJitsuSStamps[1]}/${cardJitsuSStamps[0]}`
		this.stampnum17.text = `${cardJitsuSStamps[1]}/${cardJitsuSStamps[0]}`

		let cardJitsuWStamps = this.getCategoryStamps(34)
		this.stampnum18.text = `${cardJitsuWStamps[1]}/${cardJitsuWStamps[0]}`

		let cartSurferStamps = this.getCategoryStamps(28)
		this.stampnum19.text = `${cartSurferStamps[1]}/${cartSurferStamps[0]}`

		let wavesStamps = this.getCategoryStamps(15)
		this.stampnum20.text = `${wavesStamps[1]}/${wavesStamps[0]}`
		this.stampnum21.text = `${wavesStamps[1]}/${wavesStamps[0]}`

		let iceFishingStamps = this.getCategoryStamps(52)
		this.stampnum22.text = `${iceFishingStamps[1]}/${iceFishingStamps[0]}`

		let JPAStamps = this.getCategoryStamps(11)
		this.stampnum23.text = `${JPAStamps[1]}/${JPAStamps[0]}`
		this.stampnum24.text = `${JPAStamps[1]}/${JPAStamps[0]}`

		let missions = this.getCategoryStamps(22)
		this.stampnum25.text = `${missions[1]}/${missions[0]}`
		this.stampnum26.text = `${missions[1]}/${missions[0]}`

		let pizzatronStamps = this.getCategoryStamps(54)
		this.stampnum27.text = `${pizzatronStamps[1]}/${pizzatronStamps[0]}`

		let launchStamps = this.getCategoryStamps(48)
		this.stampnum28.text = `${launchStamps[1]}/${launchStamps[0]}`

		let rescueStamps = this.getCategoryStamps(19)
		this.stampnum29.text = `${rescueStamps[1]}/${rescueStamps[0]}`
		this.stampnum30.text = `${rescueStamps[1]}/${rescueStamps[0]}`

		let pufflescapeStamps = this.getCategoryStamps(57)
		this.stampnum31.text = `${pufflescapeStamps[1]}/${pufflescapeStamps[0]}`

		let smoothieStamps = this.getCategoryStamps(58)
		this.stampnum32.text = `${smoothieStamps[1]}/${smoothieStamps[0]}`

		let sysDefStamps = this.getCategoryStamps(46)
		this.stampnum33.text = `${sysDefStamps[1]}/${sysDefStamps[0]}`

		let thinIceStamps = this.getCategoryStamps(16)
		this.stampnum34.text = `${thinIceStamps[1]}/${thinIceStamps[0]}`

		let treasureHuntStamps = this.getCategoryStamps(56)
		this.stampnum35.text = `${treasureHuntStamps[1]}/${treasureHuntStamps[0]}`

		this.stampnum10.text = `${(aquaGrabberStamps[1] + astroBarrierStamps[1] + cardJitsuStamps[1] + cardJitsuFStamps[1] + cardJitsuSStamps[1] + cardJitsuWStamps[1] + cartSurferStamps[1] + wavesStamps[1] + iceFishingStamps[1] + JPAStamps[1] + missions[1] + pizzatronStamps[1] + launchStamps[1] + rescueStamps[1] + pufflescapeStamps[1] + smoothieStamps[1] + sysDefStamps[1] + thinIceStamps[1] + treasureHuntStamps[1])}/${(aquaGrabberStamps[0] + astroBarrierStamps[0] + cardJitsuStamps[0] + cardJitsuFStamps[0] + cardJitsuSStamps[0] + cardJitsuWStamps[0] + cartSurferStamps[0] + wavesStamps[0] + iceFishingStamps[0] + JPAStamps[0] + missions[0] + pizzatronStamps[0] + launchStamps[0] + rescueStamps[0] + pufflescapeStamps[0] + smoothieStamps[0] + sysDefStamps[0] + thinIceStamps[0] + treasureHuntStamps[0])}`

		this.stampnum36.text = (isPlayer) ? this.world.client.inventory["flag"].length : args.pins.length
	}

    changeClasp(id) {
		this.clasp = id
        this.clasp.setFrame("clasp/" + id)
        this.claspthumb.setFrame("thumbs/clasp/" + id)
        this.claspselect.visible = false
    }

    changePattern(id) {
        if (id == 0) {
			this.pattern = 1
            this.pattern.visible = false
            this.patternthumb.setFrame("thumbs/color/1")
        } else {
			this.pattern = id
            this.pattern.setFrame("pattern/" + id)
            this.patternthumb.setFrame("thumbs/pattern/" + id)
            this.patternselect.visible = false
        }
    }

    changeColor(id) {
		this.color = id
        this.cover.setFrame("colour/" + id)
        this.colorthumb.setFrame("thumbs/color/" + id)
        this.colorselect.visible = false
    }

    openClasp() {
        this.hideAll()
        this.claspselect.visible = true
    }

    openColour() {
        this.hideAll()
        this.colorselect.visible = true
    }

    openPattern() {
        this.hideAll()
        this.patternselect.visible = true
    }

    hideAll() {
        this.claspselect.visible = false
        this.colorselect.visible = false
        this.patternselect.visible = false
    }

    editStampbook() {
        this.editor_background.visible = true
        this.editor.visible = true
        this.edit.visible = false
    }

    saveStampbook() {
		this.network.send('save_stampbook', { color: this.color, pattern: this.pattern, clasp: this.clasp })
        this.editor_background.visible = false
        this.editor.visible = false
        this.edit.visible = true
    }

    addPageStamps() {

        this.posArray = [[260, 270], [430, 270], [600, 270], [770, 270], [260, 420], [430, 420], [600, 420], [770, 420], [260, 570], [430, 570], [600, 570], [770, 570], [260, 720], [430, 720], [600, 720], [770, 720]]
		var pinsPosArray = [[260, 270], [380, 270], [500, 270], [620, 270], [740, 270], [860, 270], [980, 270], [1100, 270], [1220, 270], [1340, 270], [260, 390], [380, 390], [500, 390], [620, 390], [740, 390], [860, 390], [980, 390], [1100, 390], [1220, 390], [1340, 390], [260, 520], [380, 520], [500, 520], [620, 520], [740, 520], [860, 520], [980, 520], [1100, 520], [1220, 520], [1340, 520], [260, 650], [380, 650], [500, 650], [620, 650], [740, 650], [860, 650], [980, 650], [1100, 650], [1220, 650], [1340, 650], [260, 780], [380, 780], [500, 780], [620, 780], [740, 780], [860, 780], [980, 780], [1100, 780], [1220, 780], [1340, 780]]
        for (var x in this.stamps) {
            this.stamps[x].visible = false
        }

		for (var x in this.pins) {
			this.pins[x].visible = false
		}

		this.stampsOnPage = []

        let page = this.page

        if (!this.pageStamps[page] || this.pageStamps[page].length === 0) {
            this.stampHovers.visible = false
        }
        else {
            this.stampHovers.visible = true
        }

        for (var x in this.pageStamps[page]) {

			if (!Number.isInteger(this.pageStamps[page][x])) {
				this.pageStamps[page][x].visible = true;
				this.stampsOnPage.push(this.pageStamps[page][x]);
				if (this.pageStamps[page][x].locked && this.stampsEarned.includes(parseInt(this.pageStamps[page][x].id))) {
					this.pageStamps[page][x].locked.visible = false
					this.pageStamps[page][x].unlocked = true
				}
				continue
			}

            let id = this.pageStamps[page][x]
            this.pageStamps[page][x] = new BookStamp(this, this.posArray[this.stampsOnPage.length][0], this.posArray[this.stampsOnPage.length][1], id);
            this.stampLayer.add(this.pageStamps[page][x]);

			this.stampsOnPage.push(this.pageStamps[page][x])
            this.stamps.push(this.pageStamps[page][x])
        }

		if (page === 35){
			for (var pin in this.world.client.inventory["flag"]) {
				if (this.pins[this.world.client.inventory["flag"][pin]] !== undefined) { this.pins[this.world.client.inventory["flag"][pin]].visible = true; continue }

				if (!this.textures.exists(`clothing/icon/${this.world.client.inventory["flag"][pin]}`)) {
					this.pinLoader.loadPin(this.world.client.inventory["flag"][pin], pinsPosArray[this.pinsOnPage.length][0], pinsPosArray[this.pinsOnPage.length][1])
									}
				else {
					this.pins[this.world.client.inventory["flag"][pin]] = this.add.image(pinsPosArray[this.pinsOnPage.length][0], pinsPosArray[this.pinsOnPage.length][1], "clothing/icon/" + this.world.client.inventory["flag"][pin])
					this.stampLayer.add(this.pins[this.world.client.inventory["flag"][pin]])
				}
				this.pinsOnPage.push(this.pins[this.world.client.inventory["flag"][pin]])
			}
		}
    }

	addPin(pin, xpos, ypos) {
		this.pins[pin] = this.add.image(xpos, ypos, "clothing/icon/" + pin)
		this.stampLayer.add(this.pins[pin])
	}

	setStatistics(args) {
		let joinTimestamp = new Date(args.joinTime)
		let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		let joinDay = joinTimestamp.getDate()
		let dayString = ""
		let joinMonth = month[joinTimestamp.getMonth()]
		let joinYear = joinTimestamp.getFullYear()
		if (joinDay === 1 || joinDay === 21 || joinDay === 31) { dayString = `${joinDay}st` }
		else if (joinDay === 2 || joinDay === 22) { dayString = `${joinDay}nd` }
		else if (joinDay === 3 || joinDay === 23) { dayString = `${joinDay}rd` }
		else { dayString = `${joinDay}th` }
		let dateString = `${dayString} of ${joinMonth}, ${joinYear}`

		let banString = ""
		if (args.banNumber > 2) { banString = `${args.banNumber} times. Watch your behaviour!` } 
		else if (args.banNumber > 0) { banString = `${args.banNumber} times.`} 
		else { banString = `0 times! Good job!` }

		let potwString = (args.hasBeenPOTW) ? "been Penguin of the Week! Nice Job!" : "never been Penguin of the Week"

		this.statistics.text = `You joined on ${dateString}\n\nSince then:\nYou have sent ${args.messagesSent} chat messages.\nYou have played for ${Math.round(args.timePlayed / 60)} minutes! Wow, that's over ${Math.round((args.timePlayed / 86400) * 100) /100} days!\nYou have won ${args.sledRacesWon} sled races, and ${args.findFourWon} games of find four.\nYou have earned ${args.coinsEarned} coins, and spent ${Math.abs(args.coinsSpent)} coins.\nYou have thrown ${args.snowballsThrown} snowballs.\nYou have been banned ${banString}\n${args.itemsReleased} items have been released, and you have bought ${args.itemsOwned} of them.\n${args.pinsReleased} pins have been released, and you have found ${args.pinsOwned} of them.\nYou have earned ${this.stampsEarned.length} stamps\nYou have completed ${args.partyTasksCompleted} tasks at 0 parties.\nYou have ${potwString}`
	}

	getCategoryStamps(category){
		let categoryStamps = []
		let ownedCategoryStamps = []
		for (var stamp in this.crumbs.stamps){
			if (this.crumbs.stamps[stamp].groupid == category) {
				categoryStamps.push(stamp)
				if (this.stampsEarned.includes(parseInt(stamp))) ownedCategoryStamps.push(stamp)
			}
		}
		return [categoryStamps.length, ownedCategoryStamps.length]
	}

	btnOver(btntext) {
		btntext.setStyle({ "color": "#3c3c3cff"})
	}

	btnOut(btntext) {
		btntext.setStyle({ "color": "#5b5b5bff"})
	}

    onStampOver(pos) {
		if (!this.stampsOnPage[pos]) return

        this.stampInfo.visible = true
        this.stampInfo.x = this.posArray[pos][0]
        this.stampInfo.y = this.posArray[pos][1]

		this.stampInfoTitle.text = this.crumbs.stamps[this.stampsOnPage[pos].id].name
		this.stampInfoBody.text = this.crumbs.stamps[this.stampsOnPage[pos].id].description

		if (this.stampInfoBody.height === 93) this.stampInfoTitle.y = -175
		if (this.stampInfoBody.height === 62) this.stampInfoTitle.y = -162
		if (this.stampInfoBody.height === 31) this.stampInfoTitle.y = -149

        this.stampInfoBg.nineSliceObject.resize(300, this.stampInfoBody.height + 65)
    }

    onStampOut(pos) {
        this.stampInfo.visible = false
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here