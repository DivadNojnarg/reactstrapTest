library(shiny)
library(reactstrapTest)

ui <- fluidPage(
  theme = bslib::bs_theme(version = "4"),
  button_group(
    "plop",
    "A group of buttons",
    choices = names(mtcars)
  )
)

server <- function(input, output, session) {
  observe(print(input$plop))
}

shinyApp(ui, server)
