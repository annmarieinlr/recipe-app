import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'  // in [] because it is an attribute directive

})
export class DropdownDirective {
    //method that works when clicked and toggles a property
    //Don't forget to use this you have to add it to the declarations and imports in app.module.ts
    //then you can use it as a class (but don't have to list class="")
    @HostBinding('class.open') //open is the bootstrap class we're trying to toggle.
    isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
