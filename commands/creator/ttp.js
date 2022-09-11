module.exports = {
    name: "ttp",
    alias: ["texttopicture"],
    use: "<query>",
    desc: "TTP Maker",
    type: "creator",
    example: "%prefix%command <query>",
    start: async(killua, m, { text }) => {
        killua.sendFile(m.from, `https://api.zekais.com/text2png?text=${text}&color=white&apikey=zekais`, m)
    },
    isQuery: true
}
