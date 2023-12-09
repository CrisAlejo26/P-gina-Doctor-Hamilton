
export const UseScrollNavigate = () => {

    const scrollToAbout = (section: string) => {
        const aboutSection = document.getElementById(section);
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return {
        scrollToAbout
    }
}
