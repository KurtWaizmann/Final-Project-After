
// fade in for intro
export const animateIntro = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: 3
        }
    }
}

// fade in for intro
export const animateIntro2 = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 3
        }
    }
}

// image from right animation
export const animateImageRight = {
    start: {
        x: 100,
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

// animate text fade in
export const animateText = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1.5,
            delay: 0.5,
        }
    }
}

// image from left animation
export const animateImageLeft = {
    start: {
        x: -100,
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

// continue button fade in
export const animateContinue = {
    start: {
        opacity: 0,
    },
    end: {
        opacity: 1,
        transition: {
            duration: 2,
            repeat: false,
        }
    }
}

// transition between questions
export const quizTransition = {
    in: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            type: "tween",
            ease: "anticipate"
        }
    },
    out: {
        opacity: 0,
        x: "100vh",
        transition: {
            duration: 2,
            type: "tween",
            ease: "anticipate"
        }
    }
}

// transition (fade) between pages
export const pageTransition = {
    in: {
        opacity: 1,
        transition: {
            duration: 3,
        }
    },
    out: {
        opacity: 0,
        transition: {
            duration: 3,

        }
    }
}

// unused animation for making text appear
export const sentenceAnimation = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

// unused animation for making text appear
export const letterAnimation = {
    hidden: { opacity: 0, y:50 },
    visible: {
        opacity: 1,
        y: 0,
    }
}