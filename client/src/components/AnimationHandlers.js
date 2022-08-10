// HOMEPAGE

export const animateIntro = {
    start:{
    opacity: 0,
    },
    end: {
    opacity: 1,
    transition: {
        duration:3
    }
    }
}

export const animateIntro2 = {
    start:{
    opacity: 0,
    },
    end: {
    opacity: 1,
    transition: {
        delay: 2,
        duration:3
    }
    }
}

export const animateImageRight = {
    start:{
    x: 100,
    opacity:0
    },
    end: {
    x: 0,
    opacity:1,
    transition: {
        duration:1.5
    }
    }
}

export const animateText = {
    start:{
    opacity: 0,
    },
    end: {
    opacity: 1,
    transition: {
        type: "tween",
        duration:1.5,
        delay: 0.5,
    }
    }
}
export const animateImageLeft = {
    start:{
    x: -100,
    opacity:0
    },
    end: {
    x: 0,
    opacity:1,
    transition: {
        duration:1.5
    }
    }
}