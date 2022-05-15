import {
    SimpleButton,
    Button,
    Interactive
} from '@components/components'
import Book from '@scenes/interface/books/Book'
import BookStamp from './BookStamp'

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
		creditsbody.text = "A massive thank you to:\n\namman#8104 - Owner\nSaber#5026 - Owner\nCairo#0001 - Administrator\nLEGOMAN#1112 - Administrator & Designer\nVespertilio#7232 - Developer & Designer\ndirk#2732 - Developer\nCringe#8547 - Designer\nChigster#6026 - Designer\nhershey#0001 - Designer\nJukeFairy#5942 - Designer & Moderator\nKeyomine#9439 - Designer\nTeilz#6930 - Designer\nTu8x#3764 - Designer\nbird#6574 - Designer";
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

		// creditsbody2
		const creditsbody2 = this.add.text(1025, 289, "", {});
		creditsbody2.setOrigin(0.5, 0);
		creditsbody2.text = "bluey#9709 - Community Manager\nDinoNuggest#9999 - Community Manager\nLilyxm#3883 - Community Manager\naddi#6969 - Community Manager\nStitchh#2635 - Community Manager\ncloudx#3741 - Moderator\nDux#7961 - Moderator\njessica#1959 - Moderator\nSnowlily#0700 - Moderator\nsaturn#4670 - Moderator\nJulian#4977 - Moderator\nvoid#8437 - Moderator\nAnd a special mention to comfy#0806\nfor making the base client that CPF uses";
		creditsbody2.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
		page38.add(creditsbody2);

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
		statistics.text = "You joined on 1st January 1970\n\nSince then:\nYou have sent 0 chat messages.\nYou have played for 0 minutes! Wow, that's over 0 days!\nYou have won 0 sled races, and 0 games of find four.\nYou have earned 0 coins, and spent 0 coins.\nYou have thrown 0 snowballs.\nYou have been banned 0 times! Good job!\n0 items have been released, and you have bought 0 of them.\n0 pins have been released, and you have found 0 of them.\nYou have earned 0 stamps\nYou have completed 0 tasks at 0 parties.\nYou have never been Penguin of the Week.";
		statistics.setStyle({ "color": "#585858ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
		page37.add(statistics);

		// page36
		const page36 = this.add.container(0, 0);
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

		// page35
		const page35 = this.add.container(0, 0);
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

		// page34
		const page34 = this.add.container(0, 0);
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

		// page33
		const page33 = this.add.container(0, 0);
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

		// page32
		const page32 = this.add.container(0, 0);
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

		// page31
		const page31 = this.add.container(0, 0);
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

		// page30
		const page30 = this.add.container(0, 0);
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

		// page29
		const page29 = this.add.container(0, 0);
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

		// page28
		const page28 = this.add.container(0, 0);
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

		// page27
		const page27 = this.add.container(0, 0);
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

		// page26
		const page26 = this.add.container(0, 0);
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

		// page25
		const page25 = this.add.container(0, 0);
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

		// page24
		const page24 = this.add.container(0, 0);
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

		// page23
		const page23 = this.add.container(0, 0);
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

		// page22
		const page22 = this.add.container(0, 0);
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

		// page20
		const page20 = this.add.container(0, 0);
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
		this.page38 = page38;
		this.creditsbody = creditsbody;
		this.pagenum38 = pagenum38;
		this.pagename38 = pagename38;
		this.creditsbody2 = creditsbody2;
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
		this.page35 = page35;
		this.pagenum35 = pagenum35;
		this.stampnum35 = stampnum35;
		this.stampcategory35 = stampcategory35;
		this.pagename35 = pagename35;
		this.page34 = page34;
		this.pagenum34 = pagenum34;
		this.stampnum34 = stampnum34;
		this.stampcategory34 = stampcategory34;
		this.pagename34 = pagename34;
		this.page33 = page33;
		this.pagenum33 = pagenum33;
		this.stampnum33 = stampnum33;
		this.stampcategory33 = stampcategory33;
		this.pagename33 = pagename33;
		this.page32 = page32;
		this.pagenum32 = pagenum32;
		this.stampnum32 = stampnum32;
		this.stampcategory32 = stampcategory32;
		this.pagename32 = pagename32;
		this.page31 = page31;
		this.pagenum31 = pagenum31;
		this.stampnum31 = stampnum31;
		this.stampcategory31 = stampcategory31;
		this.pagename31 = pagename31;
		this.page30 = page30;
		this.pagenum30 = pagenum30;
		this.stampnum30 = stampnum30;
		this.stampcategory30 = stampcategory30;
		this.pagename30 = pagename30;
		this.page29 = page29;
		this.pagenum29 = pagenum29;
		this.stampnum29 = stampnum29;
		this.stampcategory29 = stampcategory29;
		this.pagename29 = pagename29;
		this.page28 = page28;
		this.pagenum28 = pagenum28;
		this.stampnum28 = stampnum28;
		this.stampcategory28 = stampcategory28;
		this.pagename28 = pagename28;
		this.page27 = page27;
		this.pagenum27 = pagenum27;
		this.stampnum27 = stampnum27;
		this.stampcategory27 = stampcategory27;
		this.pagename27 = pagename27;
		this.page26 = page26;
		this.pagenum26 = pagenum26;
		this.stampnum26 = stampnum26;
		this.stampcategory26 = stampcategory26;
		this.pagename26 = pagename26;
		this.page25 = page25;
		this.pagenum25 = pagenum25;
		this.stampnum25 = stampnum25;
		this.stampcategory25 = stampcategory25;
		this.pagename25 = pagename25;
		this.page24 = page24;
		this.pagenum24 = pagenum24;
		this.stampnum24 = stampnum24;
		this.stampcategory24 = stampcategory24;
		this.pagename24 = pagename24;
		this.page23 = page23;
		this.pagenum23 = pagenum23;
		this.stampnum23 = stampnum23;
		this.stampcategory23 = stampcategory23;
		this.pagename23 = pagename23;
		this.page22 = page22;
		this.pagenum22 = pagenum22;
		this.stampnum22 = stampnum22;
		this.stampcategory22 = stampcategory22;
		this.pagename22 = pagename22;
		this.page21 = page21;
		this.pagenum21 = pagenum21;
		this.stampnum21 = stampnum21;
		this.stampcategory21 = stampcategory21;
		this.pagename21 = pagename21;
		this.page20 = page20;
		this.pagenum20 = pagenum20;
		this.stampnum20 = stampnum20;
		this.stampcategory20 = stampcategory20;
		this.pagename20 = pagename20;
		this.page19 = page19;
		this.pagenum19 = pagenum19;
		this.stampnum19 = stampnum19;
		this.stampcategory19 = stampcategory19;
		this.pagename19 = pagename19;
		this.page18 = page18;
		this.pagenum18 = pagenum18;
		this.stampnum18 = stampnum18;
		this.stampcategory18 = stampcategory18;
		this.pagename18 = pagename18;
		this.page17 = page17;
		this.pagenum17 = pagenum17;
		this.stampnum17 = stampnum17;
		this.stampcategory17 = stampcategory17;
		this.pagename17 = pagename17;
		this.page16 = page16;
		this.pagenum16 = pagenum16;
		this.stampnum16 = stampnum16;
		this.stampcategory16 = stampcategory16;
		this.pagename16 = pagename16;
		this.page15 = page15;
		this.pagenum15 = pagenum15;
		this.stampnum15 = stampnum15;
		this.stampcategory15 = stampcategory15;
		this.pagename15 = pagename15;
		this.page14 = page14;
		this.pagenum14 = pagenum14;
		this.stampnum14 = stampnum14;
		this.stampcategory14 = stampcategory14;
		this.pagename14 = pagename14;
		this.page13 = page13;
		this.pagenum13 = pagenum13;
		this.stampnum13 = stampnum13;
		this.stampcategory13 = stampcategory13;
		this.pagename13 = pagename13;
		this.page12 = page12;
		this.pagenum12 = pagenum12;
		this.stampnum12 = stampnum12;
		this.stampcategory12 = stampcategory12;
		this.pagename12 = pagename12;
		this.page11 = page11;
		this.pagenum11 = pagenum11;
		this.stampnum11 = stampnum11;
		this.stampcategory11 = stampcategory11;
		this.pagename11 = pagename11;
		this.page10 = page10;
		this.pagenum10 = pagenum10;
		this.stampnum10 = stampnum10;
		this.stampcategory10 = stampcategory10;
		this.pagename10 = pagename10;
		this.page9 = page9;
		this.pagenum9 = pagenum9;
		this.stampnum9 = stampnum9;
		this.stampcategory9 = stampcategory9;
		this.pagename9 = pagename9;
		this.page8 = page8;
		this.pagenum8 = pagenum8;
		this.stampnum8 = stampnum8;
		this.stampcategory8 = stampcategory8;
		this.pagename8 = pagename8;
		this.page7 = page7;
		this.pagenum7 = pagenum7;
		this.stampnum7 = stampnum7;
		this.stampcategory7 = stampcategory7;
		this.pagename7 = pagename7;
		this.page6 = page6;
		this.pagenum6 = pagenum6;
		this.stampnum6 = stampnum6;
		this.stampcategory6 = stampcategory6;
		this.pagename6 = pagename6;
		this.page5 = page5;
		this.pagenum5 = pagenum5;
		this.stampnum5 = stampnum5;
		this.stampcategory5 = stampcategory5;
		this.pagename5 = pagename5;
		this.page4 = page4;
		this.pagenum4 = pagenum4;
		this.stampnum4 = stampnum4;
		this.stampcategory4 = stampcategory4;
		this.pagename4 = pagename4;
		this.page3 = page3;
		this.pagenum3 = pagenum3;
		this.stampnum3 = stampnum3;
		this.stampcategory3 = stampcategory3;
		this.pagename3 = pagename3;
		this.page2 = page2;
		this.pagebgs_contents = pagebgs_contents;
		this.pagenum = pagenum;
		this.stampnum = stampnum;
		this.stampcategory = stampcategory;
		this.pagename = pagename;
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
	/** @type {Phaser.GameObjects.Container} */
	page38;
	/** @type {Phaser.GameObjects.Text} */
	creditsbody;
	/** @type {Phaser.GameObjects.Text} */
	pagenum38;
	/** @type {Phaser.GameObjects.Text} */
	pagename38;
	/** @type {Phaser.GameObjects.Text} */
	creditsbody2;
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

        window.stampbook = this

        this.stamps = []

        this.pageStamps = [
            [], // Front
            [], // Index
            [], // Events
            [33, 31, 32, 34, 8, 446, 448, 35, 7, 358, 290, 36], // Characters
            [186, 189, 296, 190, 332, 362, 182, 187, 439, 426, 360, 292, 330, 183, 193, 188], // Party
            [184, 440, 438, 185, 294, 364, 444, 191], // Party
            [14, 488, 20, 26, 493, 13, 18, 16, 492, 200, 491, 192, 490, 22, 27, 23], // Activities
            [12, 15, 29, 17, 201, 30, 28, 19, 24, 489, 21, 11, 25, 198, 199, 9], // Activities
            [495, 494, 10], // Activities
            [], // Games
            [73, 80, 84, 77, 86, 75, 88, 82, 91, 78, 79, 92, 81, 85, 76, 87], // Aqua Grabber
            [74, 89, 83, 72], // Aqua Grabber
            [55, 61, 59, 62, 56, 57, 58, 60, 53, 51, 52, 54], // Astro Barrier
            [242, 232, 238, 248, 230, 240, 236, 244, 246, 234], // Card-Jitsu
            [268, 256, 264, 262, 266, 254, 260, 252], // Card-Jitsu Fire
            [485, 467, 468, 473, 486, 482, 483, 470, 472, 477, 478, 484, 474, 469, 487, 479], // Card-Jistu Snow
            [476, 480, 475, 471, 481], // Card-Jitsu Snow
            [270, 288, 286, 276, 278, 284, 282, 274], // Card-Jitsu Water
            [208, 210, 106, 224, 212, 220, 214, 216, 228, 222, 218, 226], // Cart Surfer
            [95, 97, 102, 104, 96, 108, 93, 101, 98, 110, 109, 107, 112, 111, 100, 94], // Catchin' Waves
            [113, 106, 105, 103, 114, 99], // Catchin' Waves
            [390, 382, 382, 380, 376, 388, 384, 386, 374, 372, 378], // Ice Fishing
            [49, 45, 50, 40, 47, 38, 41, 42, 43, 44, 48, 39, 46, 37], // Jet Pack Adventure
            [203, 205, 202, 204], // Jet Pack Adventure
            [160, 170, 176, 174, 178, 162, 166, 159, 177, 179, 161, 163, 165, 167, 169, 171], // Missions
            [173, 175, 172, 168, 180, 164], // Missions
            [404, 396, 400, 410, 402, 392, 394, 406, 408, 398], // Pizzatron 3000
            [334, 340, 344, 342, 338, 336, 350, 346, 350, 346, 348, 354, 356, 352], // Puffle Launch
            [132, 155, 152, 133, 156, 153, 134, 157, 154, 138, 140, 139, 148, 145, 144, 150], // Puffle Rescue
            [147, 151, 141, 149, 130, 131, 137, 136, 135, 146, 142], // Puffle Rescue
            [429, 427, 436, 434, 431, 437, 435, 432, 428, 433, 430], // Pufflescape
            [453, 452, 457, 458, 456, 463, 455, 450, 459, 451, 465, 464, 461, 460, 462, 454], // Smoothie Smash
            [320, 300, 322, 324, 308, 304, 328, 298, 310, 302, 312, 306, 326, 443], // System Defender
            [63, 67, 64, 65, 70, 68, 71, 69, 66], // Thin Ice
            [416, 420, 422, 414, 418] // Treasure Hunt
        ]
    }

    changeClasp(id) {
        this.clasp.setFrame("clasp/" + id)
        this.claspthumb.setFrame("thumbs/clasp/" + id)
        this.claspselect.visible = false
    }

    changePattern(id) {
        if (id == 0) {
            this.pattern.visible = false
            this.patternthumb.setFrame("thumbs/color/1")
        } else {
            this.pattern.setFrame("pattern/" + id)
            this.patternthumb.setFrame("thumbs/pattern/" + id)
            this.patternselect.visible = false
        }
    }

    changeColor(id) {
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
        this.editor_background.visible = false
        this.editor.visible = false
        this.edit.visible = true
    }

    addPageStamps() {

        var posArray = [[260, 270], [430, 270], [600, 270], [770, 270], [260, 420], [430, 420], [600, 420], [770, 420], [260, 570], [430, 570], [600, 570], [770, 570], [260, 720], [430, 720], [600, 720], [770, 720]]

        for (var x in this.stamps) {
            this.stamps[x].visible = false
        }

		this.stampsOnPage = []

        let page = this.page

        for (var x in this.pageStamps[page]) {

			if (!Number.isInteger(this.pageStamps[page][x])) { this.pageStamps[page][x].visible = true; continue }

            let id = this.pageStamps[page][x]
            this.pageStamps[page][x] = new BookStamp(this, posArray[this.stampsOnPage.length][0], posArray[this.stampsOnPage.length][1], id);
            this.add.existing(this.pageStamps[page][x]);

			this.stampsOnPage.push(this.pageStamps[page][x])
            this.stamps.push(this.pageStamps[page][x])
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here