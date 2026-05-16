<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="logo" @click="$router.push('/azeris/home')">AZERIS</div>
            <div class="links">
                <button class="nav-btn" @click="$router.push('/azeris/points')">
                    Rankings
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
    background: rgba(5, 10, 7, 0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(122,255,178,0.08);
}

.navbar-container {
    max-width: 1600px;
    margin: auto;
    padding: 18px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: 3px;
    color: #7affb2;
    cursor: pointer;
    text-shadow:
        0 0 10px rgba(122,255,178,0.25),
        0 0 25px rgba(122,255,178,0.12);
    transition: 0.2s ease;
}

.logo:hover {
    transform: scale(1.04);
}

.links {
    display: flex;
    align-items: center;
    gap: 16px;
}

.nav-btn {
    padding: 12px 22px;
    border-radius: 14px;
    border: 1px solid rgba(122,255,178,0.12);
    background: rgba(255,255,255,0.03);
    color: #d1fae5;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: 0.25s ease;
}

.nav-btn:hover {
    transform: translateY(-2px);
    background: rgba(26,255,124,0.12);
    border-color: rgba(122,255,178,0.35);
    color: #7affb2;
    box-shadow:0 0 18px rgba(26,255,124,0.12);
}

@media (max-width: 1100px) {
    .navbar-container {
        padding: 18px 20px;
    }
    .logo {
        font-size: 1rem;
        letter-spacing: 2px;
    }
    .links {
        gap: 10px;
    }
    .nav-btn {
        padding: 10px 14px;
        font-size: 0.85rem;
    }
}
</style>