function navigate(destination) {
    switch (destination) {
        case 'store':
            alert("Navigating to SK STORE");
            break;
        case 'shop':
            alert("Navigating to SK SHOP");
            break;
        case 'map':
            alert("Navigating to MAP");
            break;
        default:
            alert("Unknown destination");
    }
}
