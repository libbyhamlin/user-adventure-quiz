function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 40) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreHp;
