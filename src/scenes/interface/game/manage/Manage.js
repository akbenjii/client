import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Manage extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, -22, 708, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // button
        const button = scene.add.image(0, 153, "main", "help-button");
        this.add(button);

        // account
        const account = scene.add.text(0, 153, "", {});
        account.setOrigin(0.5, 0.5);
        account.text = "Delete Account";
        account.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(account);

        // newuser_btn
        const newuser_btn = scene.add.image(-160, 48, "main", "help-button");
        newuser_btn.scaleX = 0.5;
        newuser_btn.scaleY = 0.5;
        this.add(newuser_btn);

        // newuser_btntext
        const newuser_btntext = scene.add.text(-160, 48, "", {});
        newuser_btntext.setOrigin(0.5, 0.5);
        newuser_btntext.text = "Change Username";
        newuser_btntext.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(newuser_btntext);

        // newpass_btn
        const newpass_btn = scene.add.image(160, 48, "main", "help-button");
        newpass_btn.scaleX = 0.5;
        newpass_btn.scaleY = 0.5;
        this.add(newpass_btn);

        // newpass_btntext
        const newpass_btntext = scene.add.text(160, 48, "", {});
        newpass_btntext.setOrigin(0.5, 0.5);
        newpass_btntext.text = "Change Password";
        newpass_btntext.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        this.add(newpass_btntext);

        // newpass_confirm_rounded2
        const newpass_confirm_rounded2 = scene.add.ellipse(285, -21, 37.5, 37.5);
        newpass_confirm_rounded2.isFilled = true;
        newpass_confirm_rounded2.fillColor = 1136020;
        this.add(newpass_confirm_rounded2);

        // newpass_confirm_rounded1
        const newpass_confirm_rounded1 = scene.add.ellipse(35, -21, 37.5, 37.5);
        newpass_confirm_rounded1.isFilled = true;
        newpass_confirm_rounded1.fillColor = 1136020;
        this.add(newpass_confirm_rounded1);

        // newpass_confirm_bg
        const newpass_confirm_bg = scene.add.rectangle(161, -21, 250, 37.5);
        newpass_confirm_bg.isFilled = true;
        newpass_confirm_bg.fillColor = 1136020;
        this.add(newpass_confirm_bg);

        // newpass_confirm_text
        const newpass_confirm_text = scene.add.text(165, -64, "", {});
        newpass_confirm_text.setOrigin(0.5, 0.5);
        newpass_confirm_text.text = "Confirm new password";
        newpass_confirm_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(newpass_confirm_text);

        // newpass_rounded2
        const newpass_rounded2 = scene.add.ellipse(285, -128, 37.5, 37.5);
        newpass_rounded2.isFilled = true;
        newpass_rounded2.fillColor = 1136020;
        this.add(newpass_rounded2);

        // newpass_rounded1
        const newpass_rounded1 = scene.add.ellipse(35, -128, 37.5, 37.5);
        newpass_rounded1.isFilled = true;
        newpass_rounded1.fillColor = 1136020;
        this.add(newpass_rounded1);

        // newpass_bg
        const newpass_bg = scene.add.rectangle(161, -128, 250, 37.5);
        newpass_bg.isFilled = true;
        newpass_bg.fillColor = 1136020;
        this.add(newpass_bg);

        // newpass_text
        const newpass_text = scene.add.text(160, -171, "", {});
        newpass_text.setOrigin(0.5, 0.5);
        newpass_text.text = "Enter new password";
        newpass_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(newpass_text);

        // newuser_confirm_rounded2
        const newuser_confirm_rounded2 = scene.add.ellipse(-36, -21, 37.5, 37.5);
        newuser_confirm_rounded2.isFilled = true;
        newuser_confirm_rounded2.fillColor = 1136020;
        this.add(newuser_confirm_rounded2);

        // newuser_confirm_rounded1
        const newuser_confirm_rounded1 = scene.add.ellipse(-286, -21, 37.5, 37.5);
        newuser_confirm_rounded1.isFilled = true;
        newuser_confirm_rounded1.fillColor = 1136020;
        this.add(newuser_confirm_rounded1);

        // newuser_confirm_bg
        const newuser_confirm_bg = scene.add.rectangle(-160, -21, 250, 37.5);
        newuser_confirm_bg.isFilled = true;
        newuser_confirm_bg.fillColor = 1136020;
        this.add(newuser_confirm_bg);

        // newuser_confirm_text
        const newuser_confirm_text = scene.add.text(-165, -64, "", {});
        newuser_confirm_text.setOrigin(0.5, 0.5);
        newuser_confirm_text.text = "Confirm new username";
        newuser_confirm_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(newuser_confirm_text);

        // newuser_rounded2
        const newuser_rounded2 = scene.add.ellipse(-36, -128, 37.5, 37.5);
        newuser_rounded2.isFilled = true;
        newuser_rounded2.fillColor = 1136020;
        this.add(newuser_rounded2);

        // newuser_rounded1
        const newuser_rounded1 = scene.add.ellipse(-286, -128, 37.5, 37.5);
        newuser_rounded1.isFilled = true;
        newuser_rounded1.fillColor = 1136020;
        this.add(newuser_rounded1);

        // newuser_bg
        const newuser_bg = scene.add.rectangle(-160, -128, 250, 37.5);
        newuser_bg.isFilled = true;
        newuser_bg.fillColor = 1136020;
        this.add(newuser_bg);

        // newuser_text
        const newuser_text = scene.add.text(-160, -171, "", {});
        newuser_text.setOrigin(0.5, 0.5);
        newuser_text.text = "Enter new username";
        newuser_text.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(newuser_text);

        // manage
        const manage = scene.add.text(0, -238, "", {});
        manage.setOrigin(0.5, 0.5);
        manage.text = "MANAGE ACCOUNT";
        manage.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(manage);

        // x_button
        const x_button = scene.add.image(300, -268, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -270, "main", "blue-x");
        this.add(blue_x);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "help-button";
        buttonButton.callback = () => this.delete();

        // newuser_btn (components)
        const newuser_btnButton = new Button(newuser_btn);
        newuser_btnButton.spriteName = "help-button";
        newuser_btnButton.callback = () => this.username();

        // newpass_btn (components)
        const newpass_btnButton = new Button(newpass_btn);
        newpass_btnButton.spriteName = "help-button";
        newpass_btnButton.callback = () => this.password();

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.hide();

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show() {
        this.newpass = document.getElementById("newpass")
        this.newpassconfirm = document.getElementById("newpassconfirm")
        this.newuser = document.getElementById("newuser")
        this.newuserconfirm = document.getElementById("newuserconfirm")

        this.newpass.style.visibility = "visible"
        this.newpassconfirm.style.visibility = "visible"
        this.newuser.style.visibility = "visible"
        this.newuserconfirm.style.visibility = "visible"

        this.visible = true
    }

    hide(){
        this.visible = false

        this.newpass.style.visibility = 'hidden'
        this.newpassconfirm.style.visibility = 'hidden'
        this.newuser.style.visibility = 'hidden'
        this.newuserconfirm.style.visibility = 'hidden'
    }

    delete() {
        this.interface.prompt.showWindow('Are you sure you want to delete your account?\nThis cannot be undone!', "dual", () => this.network.send("delete_account"))
        this.hide()
    }

    username() {
        if (!this.newuser.value || this.newuser.value != this.newuserconfirm.value) {
            this.interface.prompt.showWindow('Usernames do not match!', "single", () => this.show())
            this.hide()
            return
        }
        this.interface.prompt.showWindow('Are you sure you want to change your username?', "dual", (text) => this.network.send("change_username", { username: this.newuser.value} ))
        this.hide()
    }

    password() {
        if (!this.newpass.value || this.newpass.value != this.newpassconfirm.value) {
            this.interface.prompt.showWindow('Passwords do not match!', "single", () => this.show())
            this.hide()
            return
        }
        this.interface.prompt.showWindow('Are you sure you want to change your password?', "dual", (text) => this.network.send("change_password", { newPassword: this.newpass.value}))
        this.hide()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
