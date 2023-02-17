
module.exports.ExEvents = {
    ButtonInteractionCreate: 'ButtonInteractionCreate',
    CommandInteractionCreate: 'CommandInteraction',
    SelectMenuInteractionCreate: 'SelectMenuInteraction',
    ModalSubmitInteraction: 'ModalSubmitInteraction',
}

module.exports.ImproveDiscordLibrary(client) {
    client.on(Events.InteractionCreate, interaction => {
        if (interaction.isButton()) {
            client.emit(events.ButtonInteractionCreate, interaction)
        } else if (interaction.isStringSelectMenu()) {
            client.emit(events.SelectMenuInteractionCreate, interaction)
        } else if (interaction.isCommand()) {
            client.emit(events.CommandInteractionCreate, interaction)
        } else if (interaction.isModalSubmit()) {
            client.emit(events.ModalSubmitInteraction, interaction)
        }
    })
}