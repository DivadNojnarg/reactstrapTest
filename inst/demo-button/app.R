library(shiny)
library(reactstrapTest)

ui <- fluidPage(
  theme = bslib::bs_theme(version = "4"),
  action_button("plop", "Click me!")
)

server <- function(input, output, session) {
  observe(print(input$plop))
}

shinyApp(ui, server)
