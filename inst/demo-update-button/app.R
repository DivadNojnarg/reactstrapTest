library(shiny)
library(reactstrapTest)

ui <- fluidPage(
  theme = bslib::bs_theme(version = "4"),
  fluidRow(
    action_button("plop", "Click me!"),
    action_button("update", "Update button 1")
  )
)

server <- function(input, output, session) {
  observe(print(input$plop))
  observeEvent(input$update, {
    update_action_button(
      session, "plop",
      configuration = list(
        label = "New text",
        status = "success"
      )
    )
  }, ignoreInit = TRUE)
}

shinyApp(ui, server)
