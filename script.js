document.querySelectorAll(".sticker-tooltip").forEach(copyButton => {
    copyButton.addEventListener("click", async () => {
        try {
            const img = document.querySelector(
                copyButton.dataset.copy
            )

            const response = await fetch(img.src)

            const blob = await response.blob()

            await navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob
                })
            ])

            const originalText = copyButton.textContent
            copyButton.textContent = "Copied!"

            setTimeout(() => {
                copyButton.textContent = originalText
            }, 1000)

        } catch (err) {
            console.error(err)
            copyButton.textContent = "Copy failed"

            setTimeout(() => {
                copyButton.textContent = "Copy Sticker"
            }, 1000)
        }
    })
})