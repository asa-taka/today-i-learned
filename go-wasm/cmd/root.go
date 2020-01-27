package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var (
	// Used for flags.
	cfgFile     string
	userLicense string
)

var rootCmd = &cobra.Command{
	Use:   "cobra",
	Short: "A generator for Cobra based Applications",
	Long: `Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
}

var addCmd = &cobra.Command{
	Use:   "add",
	Short: "A generator for Cobra based Applications",
	Long: `Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("This is add command")
	},
}

var initCmd = &cobra.Command{
	Use:   "init",
	Short: "A generator for Cobra based Applications",
	Long: `Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("This is init command")
	},
}

// Execute executes the root command.
func Execute() error {
	return rootCmd.Execute()
}

func init() {
	cobra.OnInitialize(initConfig)

	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.cobra.yaml)")
	rootCmd.PersistentFlags().StringP("author", "a", "YOUR NAME", "author name for copyright attribution")
	rootCmd.PersistentFlags().StringVarP(&userLicense, "license", "l", "", "name of license for the project")
	rootCmd.PersistentFlags().Bool("viper", true, "use Viper for configuration")
	// viper.BindPFlag("author", rootCmd.PersistentFlags().Lookup("author"))
	// viper.BindPFlag("useViper", rootCmd.PersistentFlags().Lookup("viper"))
	// viper.SetDefault("author", "NAME HERE <EMAIL ADDRESS>")
	// viper.SetDefault("license", "apache")

	rootCmd.AddCommand(addCmd)
	rootCmd.AddCommand(initCmd)
}

func initConfig() {
	// if cfgFile != "" {
	// 	// Use config file from the flag.
	// 	viper.SetConfigFile(cfgFile)
	// } else {
	// 	// Find home directory.
	// 	home, _ := homedir.Dir()
	// 	// if err != nil {
	// 	// 	er(err)
	// 	// }

	// 	// Search config in home directory with name ".cobra" (without extension).
	// 	viper.AddConfigPath(home)
	// 	viper.SetConfigName(".cobra")
	// }

	// viper.AutomaticEnv()

	// if err := viper.ReadInConfig(); err == nil {
	// 	fmt.Println("Using config file:", viper.ConfigFileUsed())
	// }
}
